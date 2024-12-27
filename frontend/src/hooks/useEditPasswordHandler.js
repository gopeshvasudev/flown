import axiosInstance from "../utils/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { setUser } from "../store/reducers/userSlice";

const useEditPasswordHandler = () => {
  const token = useSelector((store) => store.token.token);
  const dispatch = useDispatch();

  const handler = async (data) => {
    try {
      const res = await axiosInstance.patch(
        "/api/v1/profile/edit-password",
        {
          currentPassword: data?.currentPassword,
          newPassword: data?.newPassword,
          confirmNewPassword: data?.confirmNewPassword,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (res?.data?.success) {
        dispatch(setUser(res?.data?.user));
        return toast.success(res?.data?.message);
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        return toast.error(error?.response?.data?.message);
      }
    }
  };

  return handler;
};

export default useEditPasswordHandler;

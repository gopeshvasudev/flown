import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import toast from "react-hot-toast";
import { setUser } from "../store/reducers/userSlice";

const useEditUsernameHandler = () => {
  const token = useSelector((store) => store.token.token);
  const dispatch = useDispatch();

  const handler = async (username) => {
    try {
      const res = await axiosInstance.patch(
        "/api/v1/profile/edit-username",
        { username },
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
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return handler;
};

export default useEditUsernameHandler;

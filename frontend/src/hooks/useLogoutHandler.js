import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import { clearToken } from "../store/reducers/tokenSlice";
import { clearUser } from "../store/reducers/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useLogoutHandler = () => {
  const token = useSelector((store) => store.token.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handler() {
    try {
      const res = await axiosInstance.post(
        "/api/v1/auth/logout",
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (res.data.success) {
        dispatch(clearToken());
        dispatch(clearUser());
        toast.success(res?.data?.message);
        return navigate("/login");
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        toast.error(error?.response?.data?.message);
      }
    }
  }

  return handler;
};

export default useLogoutHandler;

import { useEffect } from "react";
import axiosInstance from "../utils/axiosInstance.js";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearToken, setToken } from "../store/reducers/tokenSlice.js";
import { clearUser } from "../store/reducers/userSlice.js";
import { useNavigate } from "react-router-dom";

const useRefreshTokenHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handler = async () => {
    try {
      const res = await axiosInstance.post("/api/v1/auth/refresh-token");

      if (res.data.success) {
        dispatch(setToken(res.data.accessToken));
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        toast.error(error?.response?.data?.message);

        dispatch(clearToken());
        dispatch(clearUser());
        return navigate("/login");
      }
    }
  };

  useEffect(() => {
    handler();
  }, []);
};

export default useRefreshTokenHandler;

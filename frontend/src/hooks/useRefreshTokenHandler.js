import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../utils/axiosInstance.js";
import { clearUser } from "../store/reducers/userSlice.js";
import { clearToken, setToken } from "../store/reducers/tokenSlice.js";

const useRefreshTokenHandler = (refreshInterval = 8 * 60 * 1000) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handler = async () => {
    try {
      const res = await axiosInstance.post("/api/v1/auth/refresh-token");

      if (res.data.success) {
        dispatch(setToken(res.data.accessToken));
      } else {
        throw new Error("Failed to Refresh token");
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        toast.error(error?.response?.data?.message || "Please log in again.");

        dispatch(clearToken());
        dispatch(clearUser());
        return navigate("/login");
      }
    }
  };

  useEffect(() => {
    handler();
    const interval = setInterval(() => handler(), refreshInterval);

    return () => clearInterval(interval);
  }, [refreshInterval]);
};

export default useRefreshTokenHandler;

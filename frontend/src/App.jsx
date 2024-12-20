import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "./utils/axiosInstance";
import useRefreshTokenHandler from "./hooks/useRefreshTokenHandler";
import { setUser } from "./store/reducers/userSlice";

const App = () => {
  useRefreshTokenHandler();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((store) => store.token.token);

  const getUserInfoHandler = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/profile/details", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        toast.error(error?.response?.data?.message);

        navigate("/login");
      }
    }
  };

  useEffect(() => {
    if (token) {
      getUserInfoHandler();
    }
  }, [token]);
  
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
};

export default App;

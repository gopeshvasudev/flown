import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "./utils/axiosInstance";
import useRefreshTokenHandler from "./hooks/useRefreshTokenHandler";
import { setUser } from "./store/reducers/userSlice";
import Navbar from "./components/Navbar";

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
        return navigate("/login");
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
      {window.location.pathname !== "/login" && <Navbar />}
      <Outlet />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#a21caf",
              boxShadow: "0px 0px 10px rgba(191,38,211,0.3)",
              color: "#ffffff",
            },
            iconTheme: {
              primary: "#000000",
              secondary: "#ffffff",
            },
          },
          error: {
            style: {
              background: "#a21caf",
              boxShadow: "0px 0px 10px rgba(191,38,211,0.3)",
              color: "#ffffff",
            },
            iconTheme: {
              primary: "#000000",
              secondary: "#ffffff",
            },
          },
        }}
      />
    </>
  );
};

export default App;

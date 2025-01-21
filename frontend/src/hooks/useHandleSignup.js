import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axiosInstance from "../utils/axiosInstance";

const useHandleSignup = () => {
  const navigate = useNavigate();

  const handler = async (data, reset) => {
    try {
      const { username, email, password, age, gender } = data;

      const res = await axiosInstance.post("/api/v1/auth/signup", {
        username,
        email,
        password,
        age,
        gender,
      });

      if (res && res.data && res.data.success) {
        reset({
          username: "",
          email: "",
          password: "",
          age: "",
          gender: "",
        });

        toast.success(res?.data?.message);

        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error && error.response && error.response.data) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return handler;
};

export default useHandleSignup;

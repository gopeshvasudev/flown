import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import axiosInstance from "../utils/axiosInstance";

const useHandleSignin = () => {
  const navigate = useNavigate();

  const handler = async (data, reset) => {
    try {
      const { email, password } = data;
      const res = await axiosInstance.post("/api/v1/auth/signin", {
        email,
        password,
      });

      if (res.data.success) {
        reset({
          email: "",
          password: "",
        });

        toast.success(res.data.message);

        navigate("/");
      }
    } catch (error) {
      if (error && error?.response && error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };

  return handler;
};

export default useHandleSignin;

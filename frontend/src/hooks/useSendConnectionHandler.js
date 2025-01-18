import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../utils/axiosInstance";

const useSendConnectionHandler = () => {
  const [loading, setLoading] = useState(false);

  const token = useSelector((store) => store.token.token);
  const navigate = useNavigate();

  const handler = async (letterMessage, reset) => {
    setLoading(true);
    try {
      const res = await axiosInstance.post(
        "/api/v1/connection/send",
        {
          letterMessage,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (res && res.data && res.data.success) {
        toast.success(res?.data?.message);
        reset({
          letterMessage: "",
        });
        navigate("/");
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        toast.error(error?.response?.data?.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { handler, loading };
};

export default useSendConnectionHandler;

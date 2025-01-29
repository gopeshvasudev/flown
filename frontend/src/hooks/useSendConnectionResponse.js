import React, { useState } from "react";
import { toast } from "react-hot-toast";

import axiosInstance from "../utils/axiosInstance";
import { useSelector } from "react-redux";

const useSendConnectionResponse = () => {
  const [loading, setLoading] = useState(false);
  const token = useSelector((store) => store.token.token);

  const handler = async (requestType, letterId) => {
    try {
      const res = await axiosInstance.post(
        `/api/v1/connection/${requestType}/${letterId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (res && res.data && res.data.success) {
        toast.success(res?.data?.message);
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        toast.error(error?.response?.data?.message);
      }
      toast.error();
    } finally {
      setLoading(false);
    }
  };

  return { handler, loading };
};

export default useSendConnectionResponse;

import React, { useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

const useGetCountryDetails = () => {
  const handler = async () => {
    try {
      const res = await axiosInstance.get("/api/v1/auth/country");

      if (res && res.data && res.data.success) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handler();
  }, []);
};

export default useGetCountryDetails;

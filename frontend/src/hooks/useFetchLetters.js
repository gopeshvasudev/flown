import { useSelector, useDispatch } from "react-redux";

import {
  clearLetters,
  setSentLetters,
  setReceivedLetters,
} from "../store/reducers/letterSlice";
import axiosInstance from "../utils/axiosInstance";
import { useState } from "react";

const useFetchLetters = () => {
  const [loading, setLoading] = useState(false);
  const token = useSelector((store) => store.token.token);
  const dispatch = useDispatch();

  const handler = async (requestType) => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(`/api/v1/connection/${requestType}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res && res.data && res.data.success) {
        if (requestType === "sent") {
          dispatch(setSentLetters(res?.data?.connectionRequests));
        } else {
          dispatch(setReceivedLetters(res?.data?.connectionRequests));
        }
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        console.log(error.response.data)
        dispatch(clearLetters());
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, handler };
};

export default useFetchLetters;

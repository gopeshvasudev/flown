import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-hot-toast";
import { setUser } from "../store/reducers/userSlice";

const useEditInfoHandler = () => {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.token.token);

  const handler = async (data) => {
    const { nickName, bio, fromAge, toAge, interests, languages, preference } =
      data;

    try {
      const res = await axiosInstance.patch(
        "/api/v1/profile/details",
        {
          nickName,
          bio,
          genderPreference: preference,
          interests,
          languages,
          agePreference: {
            fromAge,
            toAge,
          },
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (res?.data?.success) {
        dispatch(setUser(res?.data?.user));
        toast.success(res?.data?.message);
      }
    } catch (error) {
      if (error && error.response && error.response.data) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  return handler;
};

export default useEditInfoHandler;

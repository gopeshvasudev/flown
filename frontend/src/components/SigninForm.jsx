import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance.js";

import {
  toggleIsSigninPasswordViewable,
  toggleIsSignin,
} from "../store/reducers/appSlice";

const SigninForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const isSigninPasswordViewable = useSelector(
    (store) => store.app.isSigninPasswordViewable
  );

  const submitHandler = async (data) => {
    const { email, password } = data;
    try {
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

  return (
    <div className="w-full flex justify-center px-5">
      <form
        onSubmit={handleSubmit(submitHandler)}
        method="post"
        className="w-full sm:w-[400px] 2xl:w-[500px] flex flex-col gap-5 p-5 bg-zinc-950 rounded-md shadow-[0px_0px_30px_1px_rgba(191,38,211,0.3)]"
      >
        <h1 className="text-2xl text-center mb-5 font-medium">
          Welcome back to
          <span className="text-fuchsia-400 uppercase font-[shadow-hand]">
            {" "}
            Flown
          </span>
        </h1>

        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
          className="p-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none"
        />
        {errors.email && (
          <p className="text-xs text-red-600">{errors.email.message}</p>
        )}

        <div className="password-input w-full flex items-center border-b border-zinc-700 pr-2">
          <input
            type={!isSigninPasswordViewable ? "password" : "text"}
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            className="w-full p-2 bg-transparent outline-none focus:border-white"
          />

          <span
            className="text-lg cursor-pointer duration-300"
            onClick={() => dispatch(toggleIsSigninPasswordViewable())}
          >
            {!isSigninPasswordViewable ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        {errors.password && (
          <p className="text-xs text-red-600">{errors.password.message}</p>
        )}

        <p
          className="text-center text-sm text-zinc-400 cursor-pointer my-2"
          onClick={() => dispatch(toggleIsSignin())}
        >
          New to Flown? <span className="text-white">Sign up now</span>
        </p>

        <button
          type="submit"
          className="bg-fuchsia-500 text-black font-bold py-2 rounded-md border border-fuchsia-400 hover:bg-transparent hover:text-fuchsia-400 hover:shadow-[0px_0px_10px_#C026D3] duration-300 outline-none focus:bg-transparent focus:text-fuchsia-400 focus:shadow-[0px_0px_10px_#C026D3]"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SigninForm;

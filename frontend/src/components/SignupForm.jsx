import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axiosInstance from "../utils/axiosInstance.js";
import {
  toggleIsSignupPasswordViewable,
  toggleIsSignin,
} from "../store/reducers/appSlice";

const SignupForm = () => {
  const dispatch = useDispatch();

  const isSignupPasswordViewable = useSelector(
    (store) => store.app.isSignupPasswordViewable
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate("/");

  const submitHandler = async (data) => {
    try {
      const { username, email, password, age, gender } = data;

      const res = await axiosInstance.post("/api/v1/auth/signup", {
        username,
        email,
        password,
        age,
        gender,
      });

      if (res.data.success) {
        reset({
          username: "",
          email: "",
          password: "",
          age: "",
          gender: "",
        });

        toast.success(res.data.message);

        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error && error?.response && error?.response?.data) {
        toast.error(error?.response?.data?.message);
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
          Sign up on
          <span className="text-fuchsia-400 uppercase font-[shadow-hand]">
            {" "}
            Flown
          </span>
        </h1>

        <input
          type="text"
          {...register("username", { required: "Username is required" })}
          placeholder="Username"
          autoComplete="off"
          className="p-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none"
        />
        {errors.username && (
          <p className="text-xs text-red-600">{errors.username.message}</p>
        )}

        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
          autoComplete="off"
          className="p-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none"
        />
        {errors.email && (
          <p className="text-xs text-red-600">{errors.email.message}</p>
        )}

        <div
          className="password-input w-full flex items-center border-b border-zinc-700 pr-2 focus:border-white"
          tabIndex={"0"}
        >
          <input
            type={!isSignupPasswordViewable ? "password" : "text"}
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            autoComplete="off"
            className="w-full p-2 bg-transparent outline-none"
          />

          <span
            className="text-lg cursor-pointer duration-300"
            onClick={() => dispatch(toggleIsSignupPasswordViewable())}
          >
            {!isSignupPasswordViewable ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        {errors.password && (
          <p className="text-xs text-red-600">{errors.password.message}</p>
        )}

        <input
          type="number"
          {...register("age", { required: "Age is required" })}
          placeholder="Age"
          autoComplete="off"
          className="p-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {errors.age && (
          <p className="text-xs text-red-600">{errors.age.message}</p>
        )}

        <div className="flex flex-col gap-1 pl-2">
          <label className="text-zinc-400">Gender :</label>
          <div className="genders flex items-center flex-wrap gap-4">
            <div className="gender flex items-center gap-1">
              <label className="cursor-pointer text-sm" htmlFor="male">
                Male
              </label>
              <input
                className="w-4 h-4 accent-fuchsia-400 cursor-pointer"
                type="radio"
                {...register("gender", { required: "Gender is required" })}
                id="male"
                value="male"
              />
            </div>

            <div className="gender flex items-center gap-1">
              <label className="cursor-pointer text-sm" htmlFor="female">
                Female
              </label>
              <input
                className="w-4 h-4 accent-fuchsia-400 cursor-pointer"
                type="radio"
                {...register("gender", { required: "Gender is required" })}
                id="female"
                value="female"
              />
            </div>

            <div className="gender flex items-center gap-1">
              <label className="cursor-pointer text-sm" htmlFor="others">
                Others
              </label>
              <input
                className="w-4 h-4 accent-fuchsia-400 cursor-pointer"
                type="radio"
                {...register("gender", { required: "Gender is required" })}
                id="others"
                value="others"
              />
            </div>
          </div>
        </div>
        {errors.gender && (
          <p className="text-xs text-red-600">{errors.gender.message}</p>
        )}

        <p
          className="text-center text-sm text-zinc-400 cursor-pointer my-2"
          onClick={() => dispatch(toggleIsSignin())}
        >
          Already have an account?{" "}
          <span className="text-white">Sign in now</span>
        </p>

        <button
          type="submit"
          className="bg-fuchsia-500 text-black font-bold py-2 rounded-md border border-fuchsia-400 hover:bg-transparent hover:text-fuchsia-400 hover:shadow-[0px_0px_10px_#C026D3] duration-300 outline-none focus:bg-transparent focus:text-fuchsia-400 focus:shadow-[0px_0px_10px_#C026D3]"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

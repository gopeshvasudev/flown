import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsSigninPasswordViewable,
  toggleIsSignin,
} from "../store/reducers/appSlice";

const SigninForm = () => {
  const isSigninPasswordViewable = useSelector(
    (store) => store.app.isSigninPasswordViewable
  );

  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-center px-5">
      <form
        method="post"
        className="w-full sm:w-[400px] 2xl:w-[500px] flex flex-col gap-5 p-5 bg-zinc-950 rounded-md shadow-[0px_0px_15px_#ff8e32]"
      >
        <h1 className="text-2xl text-center mb-5 font-medium">
          Welcome back to
          <span className="text-orange-400 font-black"> Flown</span>
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none"
        />

        <div className="password-input w-full flex items-center border-b border-zinc-700 pr-2">
          <input
            type={!isSigninPasswordViewable ? "password" : "text"}
            name="password"
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

        <p
          className="text-center text-sm text-zinc-400 cursor-pointer my-2"
          onClick={() => dispatch(toggleIsSignin())}
        >
          New to Flown? <span className="text-white">Sign up now</span>
        </p>

        <button
          type="submit"
          className="bg-orange-400 text-black font-bold py-2 rounded-md border border-orange-400 hover:bg-transparent hover:text-orange-400 hover:shadow-[0px_0px_10px_#FB923C] duration-300 outline-none focus:bg-transparent focus:text-orange-400 focus:shadow-[0px_0px_10px_#FB923C]"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SigninForm;

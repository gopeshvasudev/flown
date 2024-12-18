import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsSignupPasswordViewable,
  toggleIsSignin,
} from "../store/reducers/appSlice";

const SignupForm = () => {
  const isSignupPasswordViewable = useSelector(
    (store) => store.app.isSignupPasswordViewable
  );

  const dispatch = useDispatch();

  return (
    <div className="w-full flex justify-center px-5">
      <form
        method="post"
        className="w-full sm:w-[400px] 2xl:w-[500px] flex flex-col gap-5 p-5 bg-zinc-950 rounded-md shadow-[0px_0px_15px_#ff8e32]"
      >
        <h1 className="text-2xl text-center mb-5 font-medium">
          Welcome to
          <span className="text-orange-400 font-black"> Flown</span>
        </h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="off"
          className="p-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          className="p-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none"
        />

        <div
          className="password-input w-full flex items-center border-b border-zinc-700 pr-2 focus:border-white"
          tabIndex={"0"}
        >
          <input
            type={!isSignupPasswordViewable ? "password" : "text"}
            name="password"
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

        <input
          type="number"
          name="age"
          placeholder="Age"
          autoComplete="off"
          className="p-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        <div className="flex flex-col gap-1 pl-2">
          <label className="text-zinc-400">Gender :</label>
          <div className="genders flex items-center flex-wrap gap-4">
            <div className="gender flex items-center gap-1">
              <label className="cursor-pointer text-sm" htmlFor="male">
                Male
              </label>
              <input
                className="w-4 h-4 accent-orange-400 cursor-pointer"
                type="radio"
                name="gender"
                id="male"
                value="male"
              />
            </div>

            <div className="gender flex items-center gap-1">
              <label className="cursor-pointer text-sm" htmlFor="female">
                Female
              </label>
              <input
                className="w-4 h-4 accent-orange-400 cursor-pointer"
                type="radio"
                name="gender"
                id="female"
                value="female"
              />
            </div>

            <div className="gender flex items-center gap-1">
              <label className="cursor-pointer text-sm" htmlFor="others">
                Others
              </label>
              <input
                className="w-4 h-4 accent-orange-400 cursor-pointer"
                type="radio"
                name="gender"
                id="others"
                value="others"
              />
            </div>
          </div>
        </div>

        <p
          className="text-center text-sm text-zinc-400 cursor-pointer my-2"
          onClick={() => dispatch(toggleIsSignin())}
        >
          Already have an account?{" "}
          <span className="text-white">Sign in now</span>
        </p>

        <button
          type="submit"
          className="bg-orange-400 text-black font-bold py-2 rounded-md border border-orange-400 hover:bg-transparent hover:text-orange-400 hover:shadow-[0px_0px_10px_#FB923C] duration-300 outline-none focus:bg-transparent focus:text-orange-400 focus:shadow-[0px_0px_10px_#FB923C]"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

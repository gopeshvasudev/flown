import React from "react";

const SignupForm = () => {
  return (
    <div className="w-full flex justify-center px-2">
      <form
        method="post"
        className="w-full sm:w-[400px] 2xl:w-[500px] flex flex-col gap-5 p-3 border-2 border-orange-400 rounded-md"
      >
        <h1 className="text-2xl font-bold text-center mb-5">
          Welcome back to <span className="text-orange-400">Flown</span>
        </h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none"
        />
        <p className="text-center text-sm text-zinc-400 cursor-pointer my-2">
          New on Flown? <span className="text-white">Sign up now</span>
        </p>
        <button
          type="submit"
          className="bg-orange-400 text-black font-bold py-2 rounded-md border-2 border-orange-400 hover:bg-transparent hover:text-orange-400 duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

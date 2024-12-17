import React from "react";
import SigninForm from "../components/SigninForm";

const Login = () => {
  document.title = "Flown | Login";
  return (
    <>
      <section className="w-full h-screen bg-zinc-950 flex items-center justify-center text-white">
        <SigninForm />
      </section>
    </>
  );
};

export default Login;

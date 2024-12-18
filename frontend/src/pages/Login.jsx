import React from "react";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";
import { useSelector } from "react-redux";

const Login = () => {
  document.title = "Flown | Login";

  const isSignin = useSelector((store) => store.app.isSignin);
  return (
    <>
      <section className="w-full h-screen bg-zinc-950 flex items-center text-white">
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
          {isSignin ? <SigninForm /> : <SignupForm />}
        </div>
        <div className="w-1/2 h-full bg-orange-400 hidden lg:flex"></div>
      </section>
    </>
  );
};

export default Login;

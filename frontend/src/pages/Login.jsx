import React, { useEffect } from "react";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  document.title = "Flown | Login";

  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const isSignin = useSelector((store) => store.app.isSignin);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <section className="w-full h-screen bg-zinc-950 flex items-center text-white">
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
          {isSignin ? <SigninForm /> : <SignupForm />}
        </div>
        <div className="w-1/2 h-full bg-fuchsia-400 hidden lg:flex"></div>
      </section>
    </>
  );
};

export default Login;

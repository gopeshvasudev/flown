import React from "react";
import { MdError } from "react-icons/md";
import useLogoutHandler from "../hooks/useLogoutHandler";
import { hideLogoutAlert } from "../store/reducers/appSlice";
import { useDispatch, useSelector } from "react-redux";

const LogoutAlert = () => {
  const dispatch = useDispatch();
  const isLogoutAlertVisible = useSelector(
    (store) => store.app.isLogoutAlertVisible
  );

  const logout = useLogoutHandler();

  const logoutHandler = () => {
    dispatch(hideLogoutAlert());
    return logout();
  };

  return (
    <div
      className={`${
        !isLogoutAlertVisible && "hidden"
      } logout-alert w-full h-screen flex items-center justify-center fixed top-0 left-0 bg-zinc-950 text-zinc-100 z-[100] px-5`}
    >
      <div className="alert w-full sm:w-[400px] flex flex-col items-center gap-3 shadow-[0px_0px_20px_1px_rgba(191,38,211,0.3)] rounded-xl p-3">
        <span className="text-7xl text-purple-500">
          <MdError />
        </span>

        <div>
          <h3 className="font-semibold text-2xl text-center mb-1">Logout</h3>

          <p className="text-center text-zinc-300">
            You will be returned on the login screen
          </p>
        </div>

        <div className="buttons-container w-full flex items-center gap-2 mt-5">
          <button
            onClick={() => dispatch(hideLogoutAlert())}
            className="bg-transparent border-2 border-purple-500 py-2 px-2 w-1/2 rounded-lg font-medium hover:tracking-widest duration-300 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={logoutHandler}
            className="bg-purple-500 border-2 border-purple-500 py-2 px-2 w-1/2 rounded-lg text-black font-bold hover:tracking-widest duration-300 text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutAlert;

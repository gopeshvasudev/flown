import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store) => store.user.user);
  return (
    <nav className="fixed top-0 left-0 navbar w-full h-[95px] bg-transparent text-white flex items-center justify-center p-4">
      <div className="w-full md:max-w-3xl h-full bg-zinc-950 shadow-[0px_0px_10px_1px_rgba(191,38,211,0.6)] rounded-full flex items-center justify-between px-3">
        <div>
          <h1 className="font-[shadow-hand] text-4xl text-fuchsia-400 pl-3 pt-1">
            FLOWN
          </h1>
        </div>

        <div>
          <figure className="avatar-preview w-[45px] h-[45px] bg-zinc-900 rounded-full"></figure>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

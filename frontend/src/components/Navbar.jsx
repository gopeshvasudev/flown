import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { navLinksData } from "../utils/constants";

const Navbar = () => {
  const user = useSelector((store) => store.user.user);

  return (
    <nav className="fixed top-0 left-0 navbar w-full h-[90px] bg-transparent text-white flex items-center justify-center p-4">
      <div className="w-full md:max-w-5xl h-full bg-zinc-950 shadow-[0px_0px_10px_1px_rgba(191,38,211,0.6)] rounded-2xl flex items-center justify-between px-3">
        <div>
          <Link to={"/"}>
            <h1 className="font-[shadow-hand] text-3xl text-fuchsia-400 pl-3 pt-1">
              FLOWN
            </h1>
          </Link>
        </div>

        <div>
          <ul className="flex items-center gap-20">
            {navLinksData?.map((link) => (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-white text-sm font-medium" : "text-zinc-400 text-sm"
                  }
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <figure className="avatar-preview w-[38px] h-[38px] bg-zinc-900 rounded-xl overflow-hidden border-2 border-fuchsia-500">
            <img
              className="w-full h-full object-cover"
              src={user?.photoUrl}
              alt={user?.username}
            />
          </figure>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

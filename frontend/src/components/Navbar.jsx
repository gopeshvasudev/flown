import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { navLinksData, profileNavLinksData } from "../utils/constants";
import {
  closeDropdownMenu,
  toggleIsDropdownVisible,
} from "../store/reducers/appSlice";
import useLogoutHandler from "../hooks/useLogoutHandler";

const Navbar = () => {
  const user = useSelector((store) => store.user.user);
  const isDropdownVisible = useSelector((store) => store.app.isDropdownVisible);
  const dispatch = useDispatch();
  const logout = useLogoutHandler();

  const logoutHandler = () => logout();

  return (
    <nav className="fixed z-50 top-0 left-0 navbar w-full h-[90px] bg-transparent text-white flex items-center justify-center p-4">
      <div className="w-full relative md:max-w-5xl h-full bg-zinc-950 shadow-[0px_0px_10px_1px_rgba(191,38,211,0.6)] rounded-2xl flex items-center justify-between px-3">
        <div>
          <Link to={"/"}>
            <h1 className="font-[shadow-hand] text-3xl text-purple-400 pl-3 pt-1">
              FLOWN
            </h1>
          </Link>
        </div>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-20">
            {navLinksData?.map((link) => (
              <li key={link.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white text-sm font-medium"
                      : "text-zinc-400 text-sm"
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
          <figure
            className="avatar-preview w-[38px] h-[38px] bg-zinc-900 rounded-xl overflow-hidden border-2 border-purple-500 cursor-pointer"
            onClick={() => dispatch(toggleIsDropdownVisible())}
          >
            <img
              className="w-full h-full object-cover"
              src={user?.photoUrl}
              alt={user?.username}
            />
          </figure>

          <div
            className={`dropdown ${
              isDropdownVisible ? "h-fit p-2" : "h-0 p-0"
            } overflow-hidden absolute z-50 top-[120%] right-0 bg-zinc-900 rounded-2xl duration-300`}
          >
            <ul
              className="flex flex-col h-fit gap-2"
              onClick={() => dispatch(closeDropdownMenu())}
            >
              {profileNavLinksData?.map((link) => (
                <Link
                  to={link.path}
                  key={link.name}
                  className={`${link.isMainLink && "lg:hidden"}`}
                >
                  <li
                    className={`px-8 py-2 rounded-lg font-medium text-sm hover:bg-purple-500 hover:text-black duration-300 cursor-pointer text-center`}
                  >
                    {link.name}
                  </li>
                </Link>
              ))}
              <li
                onClick={logoutHandler}
                className={`px-8 py-2 rounded-lg font-medium text-sm border-2 border-zinc-950 bg-zinc-950 text-red-500 hover:tracking-widest duration-300 cursor-pointer text-center`}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

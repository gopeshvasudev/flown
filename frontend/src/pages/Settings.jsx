import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { settingsSidebarLinkData } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { toggleSettingsSidebar } from "../store/reducers/appSlice";
import EditProfileForm from "../components/EditProfileForm";
import EditUsernameForm from "../components/EditUsernameForm";
import EditPasswordForm from "../components/EditPasswordForm";

const Settings = () => {
  const dispatch = useDispatch();

  const isSettingsSidebarOpened = useSelector(
    (store) => store.app.isSettingsSidebarOpened
  );

  return (
    <section className="w-full h-screen flex justify-center">
      <div className="h-full w-full flex pt-24 bg-black">
        <aside className="h-full border-r border-zinc-800 px-2">
          <nav>
            <div className="text-2xl mb-5 w-full flex justify-end">
              <HiOutlineMenuAlt1
                className="rotate-180 cursor-pointer"
                onClick={() => dispatch(toggleSettingsSidebar())}
              />
            </div>

            <ul className="flex flex-col gap-2">
              {settingsSidebarLinkData?.map((link) => (
                <li
                  key={link.name}
                  className="py-3 px-4 bg-purple-500 flex items-center gap-2 text-black font-semibold rounded-xl cursor-pointer"
                >
                  <span>
                    <link.icon />
                  </span>

                  <h6
                    className={`text-sm transition-all duration-300 ${
                      !isSettingsSidebarOpened && "hidden"
                    }`}
                  >
                    {link.name}
                  </h6>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <section className="scrollbar-none flex-1 px-2 pt-10 pb-2 overflow-hidden flex justify-center overflow-y-auto">
          {/* <EditProfileForm /> */}
          {/* <EditUsernameForm /> */}
          <EditPasswordForm />
        </section>
      </div>
    </section>
  );
};

export default Settings;

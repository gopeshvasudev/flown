import React from "react";
import { useSelector } from "react-redux";
import { MdModeEdit } from "react-icons/md";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { TbGenderTransgender } from "react-icons/tb";

const Profile = () => {
  const user = useSelector((store) => store.user.user);

  return (
    <section className="w-full min-h-screen">
      <div className="min-h-[100vh] w-full flex items-center gap-5 flex-col pt-32">
        <figure className="profile-picture w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden bg-zinc-800 p-2">
          <div className="border-2 border-fuchsia-500 w-full h-full overflow-hidden rounded-full">
            <img
              src={user?.photoUrl}
              className="w-full h-full object-cover"
              alt={user?.nickName || user?.username}
            />
          </div>
        </figure>

        <div>
          <h1 className="text-3xl text-fuchsia-400 text-center font-semibold tracking-tight">
            {user?.nickName || "Nickname Needed!"}
          </h1>
          <h6 className="text-sm text-center mt-1">@{user?.username}</h6>
        </div>

        <div className="rounded-xl flex items-center gap-1 overflow-hidden">
          <div className="h-14 w-24 text-fuchsia-400 bg-zinc-900 text-xl flex items-center justify-center">
            {user?.gender === "male" && <IoMdMale />}
            {user?.gender === "female" && <IoMdFemale />}
            {user?.gender === "others" && <TbGenderTransgender />}
          </div>

          <div className="h-14 w-24 font-semibold bg-zinc-900 flex items-center justify-center">
            {user?.age}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="py-4 px-6 bg-fuchsia-500 rounded-2xl text-black font-semibold text-sm flex items-center gap-2">
            <span className="text-lg">
              <MdModeEdit />
            </span>
            Edit Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;

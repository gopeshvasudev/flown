import React from "react";
import { useSelector } from "react-redux";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { TbGenderTransgender } from "react-icons/tb";
import LanguageTag from "../components/LanguageTag";
import { PiDroneBold } from "react-icons/pi";
import Diary from "../components/Diary";
import BioContainer from "../components/BioContainer";
import MyImage from "../components/MyImage";

const Profile = () => {
  document.title = "Flown | Profile";
  const user = useSelector((store) => store.user.user);

  return (
    <section className="w-full flex justify-center">
      <div className="min-h-screen w-full md:w-[600px] flex items-center gap-5 flex-col pt-28 pb-5 px-2">
        <figure className="profile-picture w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-3xl overflow-hidden bg-zinc-900 p-2">
          <div className="border-4 border-purple-500 w-full h-full overflow-hidden rounded-3xl">
            <MyImage imageInfo={{ src: user?.photoUrl, alt: user?.username }} />
          </div>
        </figure>

        <div>
          <h1 className="text-3xl text-purple-400 text-center font-semibold tracking-tight">
            {user?.nickName || "Flown Explorer"}
          </h1>
          <h6 className="text-sm text-center mt-1">@{user?.username}</h6>
        </div>

        <div className="rounded-xl flex items-center gap-1 overflow-hidden">
          <div className="px-4 py-3 bg-black text-xl flex items-center justify-center gap-3">
            <span className="border-r border-zinc-600 pr-2 text-purple-400">
              {user?.gender === "male" && <IoMdMale />}
              {user?.gender === "female" && <IoMdFemale />}
              {user?.gender === "others" && <TbGenderTransgender />}
            </span>

            <h6 className="text-white font-semibold">{user?.age}</h6>
          </div>

          <div className="px-4 py-3 font-semibold bg-black text-xl flex items-center justify-center gap-3">
            <span className="text-purple-400 border-r border-zinc-600 pr-2">
              <PiDroneBold />
            </span>

            <h6 className="text-white font-semibold">{user?.flownPoints}</h6>
          </div>
        </div>

        <BioContainer bio={user?.bio} />

        <div className="diaries scrollbar-none w-full max-h-[600px] overflow-y-auto p-5 border-t border-b border-zinc-800 flex flex-wrap justify-center gap-4">
          {/* <h6 className="text-center text-lg">No diary added yet!</h6> */}
          <Diary />
          <Diary />
          <Diary />
        </div>

        <div className="languages flex gap-2 flex-wrap justify-center">
          {user?.languages?.map((language) => (
            <LanguageTag name={language} key={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;

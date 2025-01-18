import React from "react";
import LetterUserCard from "../components/LetterUserCard";

const Letters = () => {
  return (
    <section className="w-full h-screen pt-24 pb-2 flex items-center justify-center">
      <div className="w-full md:w-[600px] h-full flex flex-col gap-2 p-4 md:p-0">
        <div className="flex items-center w-full gap-2">
          <button className="w-1/2 px-2 py-3 bg-purple-500 text-black font-semibold text-sm rounded-lg hover:tracking-widest duration-300">
            Sent letters
          </button>

          <button className="w-1/2 px-2 py-3 bg-purple-500 text-black font-semibold text-sm rounded-lg hover:tracking-widest duration-300">
            Received letters
          </button>
        </div>

        <div className="scrollbar-none overflow-y-auto w-full h-full flex flex-wrap items-start justify-center gap-2 border border-zinc-700 rounded-lg p-2">
          <LetterUserCard
            userInfo={{
              imageUrl:
                "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
              nickName: "Nickname",
              username: "username",
            }}
          />
          <LetterUserCard
            userInfo={{
              imageUrl:
                "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
              nickName: "Random Nickname",
              username: "username",
            }}
          />
          <LetterUserCard
            userInfo={{
              imageUrl:
                "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
              nickName: "Nickname",
              username: "username",
            }}
          />
          <LetterUserCard
            userInfo={{
              imageUrl:
                "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
              nickName: "Random Nickname",
              username: "username",
            }}
          />
          <LetterUserCard
            userInfo={{
              imageUrl:
                "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
              nickName: "Nickname",
              username: "username",
            }}
          />
          <LetterUserCard
            userInfo={{
              imageUrl:
                "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png",
              nickName: "Nickname",
              username: "username",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Letters;

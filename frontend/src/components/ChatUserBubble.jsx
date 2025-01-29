import React from "react";
import MyImage from "./MyImage";

const ChatUserBubble = () => {
  return (
    <div className="w-full h-16 p-2 rounded-lg bg-zinc-900 flex items-center gap-5 mb-2 overflow-hidden">
      <figure className="w-[50px] h-[50px] bg-zinc-950 rounded-lg shrink-0">
        <MyImage imageInfo={{ src: "#", alt: "#" }} />
      </figure>

      <div className="flex flex-col gap-1">
        <h2 className="text-2xl text-purple-400 font-semibold leading-none">
          Nickname
        </h2>

        <p className="text-xs text-light text-zinc-200 line-clamp-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          accusantium! Lorem, ipsum dolor.
        </p>
      </div>
    </div>
  );
};

export default ChatUserBubble;

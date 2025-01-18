import React from "react";

const LetterUserCard = ({ userInfo }) => {
  const { imageUrl, nickName, username } = userInfo;

  return (
    <div className="w-[150px] sm:w-[180px] min-h-[200px] rounded-xl bg-zinc-900 py-4 px-2 flex flex-col gap-4 items-center justify-center">
      <figure className="w-[130px] sm:w-[150px] h-[130px] sm:h-[150px] rounded-xl bg-zinc-950 flex-shrink-0 overflow-hidden">
        <img src={imageUrl} alt="" className="w-full h-full object-cover" />
      </figure>

      <div className="flex flex-col gap-1 items-center">
        <h3 className="font-semibold text-purple-400 text-xl leading-[1.1] text-center">
          {nickName}
        </h3>

        <h6 className="text-sm leading-none text-zinc-200 font-light text-center">
          @{username}
        </h6>
      </div>
    </div>
  );
};

export default LetterUserCard;

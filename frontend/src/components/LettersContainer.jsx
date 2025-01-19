import React from "react";
import { useSelector } from "react-redux";
import LetterUserCard from "./LetterUserCard";

const LettersContainer = ({ requestType }) => {
  const sentLetters = useSelector((store) => store.letter.sentLetters);
  const receivedLetters = useSelector((store) => store.letter.receivedLetters);

  return (
    <div className="scrollbar-none overflow-y-auto w-full h-full flex flex-wrap items-start justify-center gap-2 border border-zinc-700 rounded-lg p-2">
      {requestType === "sent" ? (
        sentLetters.length === 0 ? (
          <h6 className="text-white font-semibold">No Letter Found</h6>
        ) : (
          sentLetters?.map((letter) => (
            <LetterUserCard
              key={letter._id}
              userInfo={{
                photoUrl: letter.toUser.photoUrl,
                nickName: letter.toUser.nickName || "Flown Explorer",
                username: letter.toUser.username,
              }}
            />
          ))
        )
      ) : receivedLetters.length === 0 ? (
        <h6 className="text-white font-semibold">No Letter Found</h6>
      ) : (
        receivedLetters?.map((letter) => (
          <LetterUserCard
            key={letter._id}
            userInfo={{
              photoUrl: letter.fromUser.photoUrl,
              nickName: letter.fromUser.nickName || "Flown Explorer",
              username: letter.fromUser.username,
            }}
          />
        ))
      )}
    </div>
  );
};

export default LettersContainer;

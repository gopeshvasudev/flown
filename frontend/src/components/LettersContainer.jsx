import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
            <Link to={`/letters/sent/${letter._id}`} key={letter._id}>
              <LetterUserCard
                userInfo={{
                  photoUrl: letter.toUser.photoUrl,
                  nickName: letter.toUser.nickName || "Flown Explorer",
                  username: letter.toUser.username,
                }}
              />
            </Link>
          ))
        )
      ) : receivedLetters.length === 0 ? (
        <h6 className="text-white font-semibold">No Letter Found</h6>
      ) : (
        receivedLetters?.map((letter) => (
          <Link to={`/letters/received/${letter._id}`} key={letter._id}>
            <LetterUserCard
              userInfo={{
                photoUrl: letter.fromUser.photoUrl,
                nickName: letter.fromUser.nickName || "Flown Explorer",
                username: letter.fromUser.username,
              }}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default LettersContainer;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import MyImage from "../components/MyImage";
import useSendConnectionResponse from "../hooks/useSendConnectionResponse";

const ViewLetter = () => {
  const [letter, setLetter] = useState(null);

  const { letterType, letterId } = useParams();
  const receivedLetters = useSelector((store) => store.letter.receivedLetters);
  const sentLetters = useSelector((store) => store.letter.sentLetters);

  const { handler, loading } = useSendConnectionResponse();

  const rejectedResponseHandler = () => {
    handler("rejected", letterId);
  };

  const acceptedResponseHandler = () => {
    handler("accepted", letterId);
  };

  useEffect(() => {
    let foundLetter = null;

    if (letterType === "received") {
      foundLetter = receivedLetters.find((letter) => letter._id === letterId);
    } else {
      foundLetter = sentLetters.find((letter) => letter._id === letterId);
    }

    setLetter(foundLetter);
  }, [letterType, letterId, receivedLetters, sentLetters]);

  if (!letter) {
    return (
      <h6 className="font-semibold text-xl text-center">Letter not Found</h6>
    );
  }

  return (
    <section className="w-full h-screen pt-24 flex items-center justify-center p-4">
      <div className="w-full md:w-[600px] h-full border border-zinc-700 rounded-lg overflow-hidden flex flex-col gap-2 py-2">
        <div className="user-info w-full min-h-[10vh] flex items-center justify-center gap-5 px-4 py-2">
          <figure className="w-[45px] h-[45px] rounded-xl bg-zinc-800 overflow-hidden">
            <MyImage
              imageInfo={{
                src:
                  letterType === "received"
                    ? letter?.fromUser?.photoUrl
                    : letter?.toUser?.photoUrl,
                alt:
                  letterType === "received"
                    ? letter?.fromUser?.username
                    : letter?.toUser?.username,
              }}
            />
          </figure>

          <div className="flex flex-col justify-center gap-1">
            <h2 className="font-semibold text-xl text-violet-400 leading-none">
              {letterType === "received"
                ? letter?.fromUser?.nickName || "Flown Explorer"
                : letter?.toUser?.nickName || "Flown Explorer"}
            </h2>

            <p className="text-xs text-zinc-200 leading-none pl-1">
              @
              {letterType === "received"
                ? letter?.fromUser?.username
                : letter?.toUser?.username}
            </p>
          </div>
        </div>

        <div className="scrollbar-none letter w-full h-full p-2 overflow-y-auto">
          <p className="">{letter?.letterMessage}</p>
        </div>

        {letterType === "received" && (
          <div className="buttons-container w-full flex items-center gap-2 px-2">
            <button
              onClick={rejectedResponseHandler}
              className="bg-transparent border-2 border-purple-500 py-2 px-2 w-1/2 rounded-lg font-medium hover:tracking-widest duration-300 flex items-center justify-center text-sm"
            >
              Reject
            </button>

            <button
              onClick={acceptedResponseHandler}
              className={`bg-purple-500 border-2 border-purple-500 py-2 px-2 w-1/2 rounded-lg text-black font-bold hover:tracking-widest duration-300 flex items-center justify-center text-sm ${
                loading && "opacity-70"
              }`}
            >
              {loading ? "Loading..." : "Accept"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ViewLetter;

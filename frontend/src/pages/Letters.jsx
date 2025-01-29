import React, { useEffect, useState } from "react";

import useFetchLetters from "../hooks/useFetchLetters";
import LettersContainer from "../components/LettersContainer";

const Letters = () => {
  document.title = "Flown | Letters";

  const [requestType, setRequestType] = useState("sent");
  const { handler, loading } = useFetchLetters();

  const typeHandler = (requestType) => {
    handler(requestType);
    setRequestType(requestType);
  };

  useEffect(() => {
    typeHandler("sent");
  }, []);

  return (
    <section className="w-full h-screen pt-24 pb-2 flex items-center justify-center">
      <div className="w-full md:w-[600px] h-full flex flex-col gap-2 p-4 md:p-0">
        <div className="flex items-center w-full gap-2">
          <button
            onClick={() => typeHandler("sent")}
            className={`w-1/2 px-2 py-3 bg-purple-500 font-semibold text-sm rounded-lg hover:tracking-widest duration-300 ${
              requestType === "sent"
                ? "tracking-widest text-white"
                : "tracking-normal text-purple-900"
            }`}
          >
            Sent letters
          </button>

          <button
            onClick={() => typeHandler("received")}
            className={`w-1/2 px-2 py-3 bg-purple-500 font-semibold text-sm rounded-lg hover:tracking-widest duration-300 ${
              requestType === "received"
                ? "tracking-widest text-white"
                : "tracking-normal text-purple-900"
            }`}
          >
            Received letters
          </button>
        </div>

        {loading ? (
          <div className="w-full h-full border border-zinc-700 rounded-lg">
            <p className="text-center font-semibold">Loading....</p>
          </div>
        ) : (
          <LettersContainer requestType={requestType} />
        )}
      </div>
    </section>
  );
};

export default Letters;

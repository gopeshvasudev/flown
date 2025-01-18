import React from "react";

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

        <div className="scrollbar-none overflow-y-auto w-full h-full flex flex-col items-start gap-2 border border-zinc-700 rounded-lg p-2">
          <div className="w-full rounded-xl bg-zinc-900 p-2 flex gap-4 items-start">
            <figure className="w-[50px] h-[50px] rounded-xl bg-zinc-950 flex-shrink-0"></figure>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-purple-400 text-xl leading-none">
                {"This is my third name bro"}
              </h3>

              <h6 className="text-sm leading-none text-zinc-200">
                @{"username"}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letters;

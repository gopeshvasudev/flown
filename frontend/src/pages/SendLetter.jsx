import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useSendConnectionHandler from "../hooks/useSendConnectionHandler";

const SendLetter = () => {
  const { register, reset, handleSubmit } = useForm();
  const sendConnectionHandler = useSendConnectionHandler();

  const submitHandler = async (data) => {
    sendConnectionHandler(data.letterMessage);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center p-5 pt-20">
      <form
        method="post"
        className="w-full md:w-[600px]"
        onSubmit={handleSubmit(submitHandler)}
      >
        <textarea
          placeholder="Type a letter, Shape a story..."
          {...register("letterMessage", {
            required: "Letter can't be empty",
          })}
          className="scrollbar-none p-3 rounded-xl resize-none w-full h-[400px] bg-transparent border-2 border-zinc-600 outline-none mb-1"
        ></textarea>

        <div className="buttons-container w-full flex items-center gap-2">
          <Link
            className="bg-transparent border-2 border-purple-500 py-3 px-2 w-1/2 rounded-lg font-medium hover:tracking-widest duration-300 flex items-center justify-center"
            to={"/"}
          >
            Cancel
          </Link>

          <button
            className="bg-purple-500 border-2 border-purple-500 py-3 px-2 w-1/2 rounded-lg text-black font-bold hover:tracking-widest duration-300 flex items-center justify-center"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default SendLetter;

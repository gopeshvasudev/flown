import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useSendConnectionHandler from "../hooks/useSendConnectionHandler";

const SendLetter = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { handler, loading } = useSendConnectionHandler();

  const submitHandler = async (data) => {
    handler(data.letterMessage, reset);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center p-5 pt-20">
      <form
        method="post"
        className="w-full md:w-[600px]"
        onSubmit={handleSubmit(submitHandler)}
      >
        {errors.letterMessage && (
          <p className="text-sm text-red-600 font-medium mb-2 text-center">
            {errors?.letterMessage?.message}
          </p>
        )}

        <textarea
          placeholder="Type a letter, Shape a story..."
          {...register("letterMessage", {
            required: "Letter cannot be empty",
          })}
          className="scrollbar-none p-3 rounded-xl resize-none w-full h-[400px] bg-transparent border-2 border-zinc-600 outline-none mb-1"
        ></textarea>

        <div className="buttons-container w-full flex items-center gap-2">
          <Link
            className="bg-transparent border-2 border-purple-500 py-3 px-2 w-1/2 rounded-lg font-medium hover:tracking-widest duration-300 flex items-center justify-center"
            to={"/"}
          >
            Back
          </Link>

          <button
            disabled={loading}
            className={`bg-purple-500 border-2 border-purple-500 py-3 px-2 w-1/2 rounded-lg text-black font-bold hover:tracking-widest duration-300 flex items-center justify-center ${
              loading && "opacity-70"
            }`}
            type="submit"
          >
            {loading ? "Loading..." : "Send letter"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default SendLetter;

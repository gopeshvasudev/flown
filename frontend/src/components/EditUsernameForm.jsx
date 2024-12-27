import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { MdError } from "react-icons/md";
import useEditUsernameHandler from "../hooks/useEditUsernameHandler";
import { Link } from "react-router-dom";

const EditUsernameForm = () => {
  const user = useSelector((store) => store.user.user);
  const usernameHandler = useEditUsernameHandler();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user?.username,
    },
  });

  const submitHandler = (data) => {
    const { username } = data;

    if (username) {
      usernameHandler(username);
    }
  };

  return (
    <div className="w-full h-fit md:w-[500px] bg-black rounded-xl p-3 shadow-[0px_0px_30px_1px_rgba(191,38,211,0.5)] overflow-hidden">
      <form
        method="post"
        className="w-full flex flex-col gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="w-full">
          <h2 className="pl-2 mb-2">Username</h2>

          <p className="text-semibold text-xs leading-5 text-zinc-300 mb-2 pl-1 flex items-start gap-1">
            <span className="text-lg text-purple-500">
              <MdError />
            </span>
            {errors?.username
              ? errors?.username?.message
              : !user?.isUsernameChangedOnce
              ? "You can change your username only once. Choose carefully!"
              : "You have already changed your username. Further changes are not allowed."}
          </p>

          <input
            type="text"
            {...register("username", { required: "Username can't be empty!" })}
            placeholder="Enter your Username"
            autoComplete="off"
            className={`${
              user?.isUsernameChangedOnce && "opacity-50"
            } p-2 w-full bg-transparent border rounded-xl border-zinc-700 focus:border-white outline-none`}
            disabled={user?.isUsernameChangedOnce}
          />
        </div>

        {!user?.isUsernameChangedOnce && (
          <div className="buttons-container w-full flex items-center gap-2">
            <Link
              to={"/profile"}
              className="w-1/2 flex justify-center py-3 px-2 rounded-lg font-semibold bg-zinc-200 text-black text-sm border-2 border-zinc-200 duration-300 hover:text-zinc-200 hover:bg-transparent overflow-hidden"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="w-1/2 flex justify-center py-3 px-2 rounded-lg font-semibold bg-purple-500 text-black text-sm border-2 border-purple-500 duration-300 hover:text-purple-400 hover:bg-transparent overflow-hidden"
            >
              Change
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EditUsernameForm;

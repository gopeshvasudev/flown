import React from "react";
import { useForm } from "react-hook-form";
import {
  interestsList,
  languagesList,
  preferencesList,
} from "../utils/constants";

const EditProfileForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="scrollbar-none h-full w-full md:w-[500px] bg-zinc-900 rounded-xl p-3 overflow-y-auto">
      <form
        method="post"
        className="w-full flex flex-col gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          type="text"
          {...register("nickName")}
          placeholder="Nickname"
          autoComplete="off"
          id="nickname"
          className="p-2 bg-transparent border-b border-zinc-700 focus:border-white outline-none"
        />

        <div>
          <h2 className="pl-2 mb-2">Preference</h2>

          <div className="w-full py-4 px-6 rounded-xl bg-zinc-950 flex flex-wrap items-center gap-5">
            {preferencesList?.map((preference) => (
              <div key={preference} className="flex items-center gap-2">
                <input
                  type="radio"
                  {...register("preference")}
                  id={preference}
                  value={preference}
                  className="w-4 h-4 accent-purple-500 cursor-pointer"
                />

                <label
                  htmlFor={preference}
                  className="text-sm text-zinc-200 cursor-pointer"
                >
                  {preference}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="pl-2 mb-2">Interests</h2>

          <div className="scrollbar-none w-full h-[300px] bg-zinc-950 rounded-xl overflow-y-auto py-4 px-6">
            {interestsList?.map((interest) => (
              <div key={interest} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  {...register("interests")}
                  id={interest.toLowerCase()}
                  value={interest.toLowerCase()}
                  className="accent-purple-500 cursor-pointer"
                />

                <label
                  htmlFor={interest.toLowerCase()}
                  className="text-sm text-zinc-200 cursor-pointer"
                >
                  {interest}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="pl-2 mb-2">Languages</h2>

          <div
            className="scrollbar-none w-full h-[300px] bg-zinc-950 rounded-xl overflow-y-auto
          py-4 px-6"
          >
            {languagesList?.map((language) => (
              <div key={language} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  {...register("languages")}
                  id={language.toLowerCase()}
                  value={language.toLowerCase()}
                  className="accent-purple-500 cursor-pointer"
                />

                <label
                  htmlFor={language.toLowerCase()}
                  className="text-sm text-zinc-200 cursor-pointer"
                >
                  {language}
                </label>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="py-3 px-6 bg-purple-500 text-black rounded-xl text-sm font-semibold border-2 border-purple-500 hover:bg-transparent hover:text-purple-400 duration-300"
        >
          Edit Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;

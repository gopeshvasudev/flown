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
    <div className="w-full h-fit md:w-[500px] bg-black rounded-xl p-3 shadow-[0px_0px_30px_1px_rgba(191,38,211,0.5)]">
      <form
        method="post"
        className="w-full flex flex-col gap-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="w-full">
          <h2 className="pl-2 mb-2">Nickname</h2>

          <input
            type="text"
            {...register("nickName")}
            placeholder="Enter your Nickname"
            autoComplete="off"
            className="p-2 w-full bg-transparent border rounded-xl border-zinc-700 focus:border-white outline-none"
          />
        </div>

        <div>
          <h2 className="pl-2 mb-2">Gender Preference</h2>

          <div className="w-full py-4 px-6 rounded-xl bg-transparent border border-zinc-700 flex flex-wrap items-center gap-5">
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
          <h2 className="pl-2 mb-2">Age Preference</h2>

          <div className="flex items-center gap-2">
            <input
              type="number"
              {...register("age")}
              className="w-1/2 p-2 bg-transparent border rounded-xl border-zinc-700 focus:border-white outline-none"
              placeholder="From"
            />
            <input
              type="number"
              {...register("age")}
              className="w-1/2 p-2 bg-transparent border rounded-xl border-zinc-700 focus:border-white outline-none"
              placeholder="To"
            />
          </div>
        </div>

        <div>
          <h2 className="pl-2 mb-2">Interests</h2>

          <div className="scrollbar-none w-full h-[300px] bg-transparent border border-zinc-700 rounded-xl overflow-y-auto py-4 px-6">
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
            className="scrollbar-none w-full h-[300px] bg-transparent border border-zinc-700 rounded-xl overflow-y-auto
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

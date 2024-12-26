import { useForm } from "react-hook-form";
import {
  interestsList,
  languagesList,
  preferencesList,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setBioLength } from "../store/reducers/appSlice";
import useEditInfoHandler from "../hooks/useEditInfoHandler";

const EditProfileForm = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user.user);
  const bioLength = useSelector((store) => store.app.bioLength);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nickName: user?.nickName,
      bio: user?.bio,
      preference: user?.genderPreference,
      fromAge: user?.agePreference.fromAge,
      toAge: user?.agePreference.toAge,
      interests: user?.interests,
      languages: user?.languages,
    },
  });

  const handler = useEditInfoHandler();

  const bioLengthHandler = (e) => {
    dispatch(setBioLength(e.target.value.length));
  };

  const submitHandler = (data) => {
    handler(data);
  };

  useEffect(() => {
    if (user) {
      dispatch(setBioLength(user?.bio?.length));
    }
  }, [user]);

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

        <div className="w-full">
          <h2 className="pl-2 mb-2">Bio</h2>

          <textarea
            {...register("bio")}
            placeholder="Enter your Bio"
            className={`scrollbar-none p-2 w-full h-[300px] resize-none bg-transparent border rounded-xl border-zinc-700 focus:border-white outline-none ${
              bioLength >= 500 && "opacity-50"
            }`}
            onChange={bioLengthHandler}
            maxLength={500}
          ></textarea>

          <h6 className="text-right tracking-widest pr-1 text-sm text-zinc-400">
            <span className="font-bold">{bioLength}</span>/500
          </h6>
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
              {...register(
                "fromAge",
                user?.age >= 18
                  ? {
                      min: {
                        value: 18,
                        message: "From age must be between 18 to 60",
                      },
                      max: {
                        value: 60,
                        message: "From age must be between 18 to 60",
                      },
                    }
                  : {
                      min: {
                        value: 13,
                        message: "From age must be between 13 to 17",
                      },
                      max: {
                        value: 17,
                        message: "From age must be between 13 to 17",
                      },
                    }
              )}
              className="w-1/2 p-2 bg-transparent border rounded-xl border-zinc-700 focus:border-white outline-none"
              placeholder="From"
            />
            <input
              type="number"
              {...register(
                "toAge",
                user?.age >= 18
                  ? {
                      min: {
                        value: 18,
                        message: "To age must be between 18 to 60",
                      },
                      max: {
                        value: 60,
                        message: "To age must be between 18 to 60",
                      },
                    }
                  : {
                      min: {
                        value: 13,
                        message: "To age must be between 13 to 17",
                      },
                      max: {
                        value: 17,
                        message: "To age must be between 13 to 17",
                      },
                    }
              )}
              className="w-1/2 p-2 bg-transparent border rounded-xl border-zinc-700 focus:border-white outline-none"
              placeholder="To"
            />
          </div>

          {errors && errors?.fromAge ? (
            <p className="text-sm font-medium text-red-500 mt-1 pl-2">
              {errors?.fromAge?.message}
            </p>
          ) : (
            <p className="text-sm font-medium text-red-500 mt-1 pl-2">
              {errors?.toAge?.message}
            </p>
          )}
        </div>

        <div>
          <h2 className="pl-2 mb-2">Interests</h2>

          {errors?.interests && (
            <p className="text-xs font-medium text-red-500 mb-1 pl-2">
              {errors?.interests?.message}
            </p>
          )}

          <div className="scrollbar-none w-full h-[300px] bg-transparent border border-zinc-700 rounded-xl overflow-y-auto py-4 px-6">
            {interestsList?.map((interest) => (
              <div key={interest} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  {...register("interests", {
                    validate: (value) => {
                      if (value.length > 5) {
                        return "Only 5 Interests can add";
                      }
                    },
                  })}
                  id={interest}
                  value={interest}
                  className="accent-purple-500 cursor-pointer"
                />

                <label
                  htmlFor={interest}
                  className="text-sm text-zinc-200 cursor-pointer"
                >
                  {interest[0].toUpperCase() + interest.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="pl-2 mb-2">Languages</h2>

          {errors?.languages && (
            <p className="text-xs font-medium text-red-500 mb-1 pl-2">
              {errors?.languages?.message}
            </p>
          )}

          <div
            className="scrollbar-none w-full h-[300px] bg-transparent border border-zinc-700 rounded-xl overflow-y-auto
          py-4 px-6"
          >
            {languagesList?.map((language) => (
              <div key={language} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  {...register("languages", {
                    validate: (value) => {
                      if (value.length > 5) {
                        return "Only 5 languages can add";
                      }
                    },
                  })}
                  id={language}
                  value={language}
                  className="accent-purple-500 cursor-pointer"
                />

                <label
                  htmlFor={language}
                  className="text-sm text-zinc-200 cursor-pointer"
                >
                  {language.charAt(0).toUpperCase() + language.slice(1)}
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

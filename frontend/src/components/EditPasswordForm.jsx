import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useEditPasswordHandler from "../hooks/useEditPasswordHandler";

const EditPasswordForm = () => {
  const { handleSubmit, register } = useForm();
  const passwordHandler = useEditPasswordHandler();

  const submitHandler = (data) => {
    if (data) {
      passwordHandler(data);
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
          <h2 className="pl-2 mb-2">Current Password</h2>

          <input
            type="password"
            {...register("currentPassword")}
            placeholder="Enter Current password"
            autoComplete="off"
            className="p-2 w-full bg-transparent border rounded-xl border-zinc-700 focus:border-white outline-none"
          />
        </div>

        <div className="w-full">
          <h2 className="pl-2 mb-2">New Password</h2>

          <input
            type="password"
            {...register("newPassword")}
            placeholder="Enter new password"
            autoComplete="off"
            className="p-2 w-full bg-transparent border rounded-xl border-zinc-700 focus:border-white outline-none"
          />
        </div>

        <div className="w-full">
          <h2 className="pl-2 mb-2">Confirm Password</h2>

          <input
            type="password"
            {...register("confirmNewPassword")}
            placeholder="Enter confirm password"
            autoComplete="off"
            className="p-2 w-full bg-transparent border rounded-xl border-zinc-700 focus:border-white outline-none"
          />
        </div>

        <div className="buttons-container w-full flex items-center gap-2 mt-3">
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
      </form>
    </div>
  );
};

export default EditPasswordForm;

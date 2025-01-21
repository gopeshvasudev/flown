import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Errors = () => {
  const errors = useRouteError();

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center gap-10 bg-zinc-950 text-white">
      <div>
        <h1 className="text-8xl font-bold text-purple-400 text-center">
          {errors?.status || 500}
        </h1>

        <h2 className="text-6xl font-semibold text-center">
          {errors?.statusText || "Internal Server Error"}
        </h2>
      </div>

      <Link
        to={"/"}
        className="bg-zinc-800 px-4 py-3 rounded-2xl border-2 border-zinc-800 hover:bg-transparent duration-300"
      >
        Back to Homepage
      </Link>
    </section>
  );
};

export default Errors;

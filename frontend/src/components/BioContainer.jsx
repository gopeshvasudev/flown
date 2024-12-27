import React from "react";

const BioContainer = ({ bio }) => {
  return (
    <div className="w-full p-3 flex justify-center">
      <h2 className="text-center text-sm leading-6 w-full md:w-[90%]">{bio}</h2>
    </div>
  );
};

export default BioContainer;

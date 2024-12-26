import React from "react";

const LanguageTag = ({ name }) => {
  return (
    <div className="px-4 py-2 bg-black rounded-xl text-purple-400 font-semibold text-sm">
      {name}
    </div>
  );
};

export default LanguageTag;

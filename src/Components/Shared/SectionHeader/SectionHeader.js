import React from "react";

const SectionHeader = ({ text, children }) => {
  return (
    <div className="bg-gray-200 mt-5">
      <div className="wrapper">
        <h1 className=" text-xl text-gray-500 p-2 mb-3 mt-8 rounded font-bold capitalize">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default SectionHeader;

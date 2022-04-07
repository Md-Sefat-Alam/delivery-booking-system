import React from "react";

const InputFieldPost = ({ refer, type, placeholder = "", title, min, max }) => {
  return (
    <div className=" py-2">
      <span className="w-full text-sm text-gray-400">{title}</span>
      <input
        ref={refer}
        required
        className="w-full border rounded p-1"
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
      />
    </div>
  );
};

export default InputFieldPost;

import React, { InputHTMLAttributes } from "react";

const InputFiled = ({
  type,
  defaultValue,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 border rounded w-full dark:placeholder-gray-400"
      type={type}
      value={defaultValue}
      {...props}
    />
  );
};

export default InputFiled;

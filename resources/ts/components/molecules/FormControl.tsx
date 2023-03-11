import React, { HTMLInputTypeAttribute } from "react";
import InputLabel from "@/components/atoms/inputs/InputLabel";
import { FormControlProps } from "@/types/inputs";
import InputFiled from "@/components/atoms/inputs/InputFiled";

const FormControl = ({
  label,
  name,
  labelStyle,
  error,
  type = "text",
  onChange,
  value,
}: FormControlProps) => {
  return (
    <div className="mb-4 last:mb-0">
      <InputLabel htmlFor={name} className={labelStyle}>
        {label}
      </InputLabel>
      <InputFiled
        value={value}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default FormControl;

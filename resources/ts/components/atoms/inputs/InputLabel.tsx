import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

const InputLabel = ({
  children = undefined,
  className,
  ...props
}: DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>) => {
  return (
    <label
      className={`block font-bold mb-2 ${
        props.htmlFor && "cursor-pointer"
      } ${className}`}
      {...props}
    >
      {children && children}
    </label>
  );
};

export default InputLabel;

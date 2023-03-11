import { ChangeEvent, HTMLInputTypeAttribute } from "react";

export interface FormControlProps {
  label: string;
  labelStyle?: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
}

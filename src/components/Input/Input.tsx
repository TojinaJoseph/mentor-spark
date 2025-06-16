import type React from "react";
import { useState } from "react";
import Styles from "./Input.module.scss";

export interface InputProps {
  type: string;
  label: string;
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, label, name, placeholder }) => {
  const [inputValue, setValue] = useState("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div className={Styles.inputContainer}>
      <label htmlFor="">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={inputValue}
        onChange={(e) => handleChange(e)}
        name={name}
      />
    </div>
  );
};

export default Input;

import type React from "react";
import styles from "./Input.module.scss";

export interface InputProps {
  type: string;
  label: string;
  name: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;

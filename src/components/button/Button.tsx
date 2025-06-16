import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "success" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  label = "submit",
  onClick,
  disabled = false,
  variant = "primary",
}) => {
  return (
    <>
      <button
        className={`styles.button ${styles[variant]}`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};
export default Button;

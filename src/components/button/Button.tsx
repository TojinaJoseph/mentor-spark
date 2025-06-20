import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
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
        className={`${styles.button} ${styles[variant]} ${
          disabled ? styles.disabled : undefined
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};
export default Button;

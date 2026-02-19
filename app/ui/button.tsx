import { useCartStore } from "@/app/store";
import styles from "@/app/css/Button.module.css";
import { ButtonProps } from "../lib/definitions";

export default function Button({
  children,
  onClick,
  css,
  disabled,
  type = "button",
}: ButtonProps) {
  const className = css ? css: "btn"; // TODO: standard button??

  return (
    <button
      type={type}
      className={styles[className]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

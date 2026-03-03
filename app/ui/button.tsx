import { ButtonProps } from "../lib/definitions";
import styles from "@/app/css/Button.module.css";

export default function Button({ children, css, ...rest }: ButtonProps) {
  // generic button used around the site
  const className = css ? css : "btn"; // TODO: standard button??

  return (
    <button {...rest} className={styles[className]}>
      {children}
    </button>
  );
}

// export default function Button({
//   children,
//   onClick,
//   id,
//   css,
//   disabled,
//   type = "button",
// }: ButtonProps) {
//   return (
//     <button
//       type={type}
//       id={id}
//       className={styles[className]}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// }

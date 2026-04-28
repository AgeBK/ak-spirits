// "use client";
import { KeyStringProps } from "../lib/definitions";
import styles from "@/app/css/Accordion.module.css";

export default function Accordion({ children, name }: KeyStringProps) {
  // Accordion component: runs purely on CSS based on the checkbox value (no state)

  return (
    <div className={styles.accordion}>
      <input type="checkbox" id={name} name={name} />
      <label className={styles.open} htmlFor={name}>
        <svg data-ico viewBox="0 0 10 10">
          <path d="M 1 3 L 5 7 L 9 3" />
        </svg>
      </label>
      <label className={styles.close} htmlFor={name}>
        <svg data-ico viewBox="0 0 10 10">
          <path d="M 1 7 L 5 3 L 9 7" />
        </svg>
      </label>
      <h3 className={styles.filterHdr}>{name}:</h3>
      <div className={styles.toggleList}>{children}</div>
      <hr />
    </div>
  );
}

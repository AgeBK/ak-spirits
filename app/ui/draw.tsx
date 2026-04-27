// "use client";
import styles from "@/app/css/Draw.module.css";

export default function Draw({ children, name }) {
  //   const data = await fetchSpirits();

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

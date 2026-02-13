import styles from "@/app/css/Price.module.css";

export default function Price({
  price_current,
  price_normal,
  css,
}: {
  price_current: number;
  price_normal?: number;
  css: string;
}) {
  return (
    <div className={`${styles.container} ${styles[css]}`}>
      {price_normal && price_normal > price_current && (
        <div className={styles.normal}>${price_normal}</div>
      )}
      <div className={styles.current}>${price_current}</div>
    </div>
  );
}

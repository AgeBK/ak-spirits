import styles from "@/app/css/ItemsPerPage.module.css";

export default function ItemsPerPage({
  setPerPage,
  perPage,
}: {
  setPerPage: (value: number) => void;
  perPage: number;
}) {
  const itemsArr = [20, 40, 60, 80];
  return (
    <div className={styles.container}>
      {itemsArr.map((val) => (
        <button
          key={val}
          className={`${styles.itemsPerPage} ${val === perPage ? styles.selected : ""}`}
          onClick={() => setPerPage(val)}
        >
          {val}
        </button>
      ))}
    </div>
  );
}

import styles from "@/app/css/ItemsPerPage.module.css";

export default function ItemsPerPage({
  setPerPage,
}: {
  setPerPage: (value: number) => void;
}) {
  const itemsArr = [20, 40, 60, 80];
  return (
    <div className={styles.container}>
      {itemsArr.map((val) => (
        <button
          key={val}
          className={styles.itemsPerPage}
          onClick={() => setPerPage(val)}
        >
          {val}
        </button>
      ))}
    </div>
  );
}

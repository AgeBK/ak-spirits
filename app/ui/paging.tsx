import styles from "@/app/css/Paging.module.css";

export default function Paging({
  totalPages,
  setPage,
  page,
}: {
  totalPages: number;
  setPage: (value: number) => void;
  page: number;
}) {
  return (
    <div className={styles.container}>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`${i === page ? styles.selected : styles.paging}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

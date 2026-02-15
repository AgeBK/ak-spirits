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
  console.log(totalPages, page);

  return (
    <div className={styles.container}>
      <button onClick={() => setPage(0)} disabled={page === 0}>
        &lt;&lt;
      </button>
      <button onClick={() => setPage(page - 1)} disabled={page === 0}>
        &lt;
      </button>
      <div className={styles.currentPage}>{page + 1}</div>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages - 1}
      >
        &gt;
      </button>
      <button
        onClick={() => setPage(totalPages - 1)}
        disabled={page === totalPages - 1}
      >
        &gt;&gt;
      </button>
    </div>
  );
}

import Button from "./button";
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
  // TODO: need to attach to bottom when minimal products
  return (
    <div className={styles.container}>
      <Button onClick={() => setPage(0)} disabled={page === 0} css="paging">
        &lt;&lt;
      </Button>
      <Button
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
        css="paging"
      >
        &lt;
      </Button>
      <div className={styles.currentPage}>{page + 1}</div>{" "}
      {totalPages > 1 && <span className={styles.total}>of {totalPages}</span>}
      <Button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages - 1}
        css="paging"
      >
        &gt;
      </Button>
      <Button
        onClick={() => setPage(totalPages - 1)}
        disabled={page === totalPages - 1}
        css="paging"
      >
        &gt;&gt;
      </Button>
    </div>
  );
}

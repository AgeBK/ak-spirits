import Button from "./button";
import styles from "@/app/css/Paging.module.css";

export default function Paging({
  totalPages,
  updatePaging,
  paging,
  totalItems,
}: {
  totalPages: number;
  updatePaging: (page: number, pageSize: number) => void;
  paging: { page: number; pageSize: number };
  totalItems: number;
}) {
  // TODO: need to attach to bottom when minimal products
  const { page, pageSize } = paging;

  console.log(totalItems);
  console.log(pageSize);

  if (totalItems > pageSize) {
    return (
      <div className={styles.container}>
        <Button
          onClick={() => updatePaging(0, pageSize)}
          disabled={page === 0}
          css="paging"
        >
          &lt;&lt;
        </Button>
        <Button
          onClick={() => updatePaging(page - 1, pageSize)}
          disabled={page === 0}
          css="paging"
        >
          &lt;
        </Button>
        <div className={styles.currentPage}>{page + 1}</div>
        {totalPages > 1 && (
          <span className={styles.total}>of {totalPages}</span>
        )}
        <Button
          onClick={() => updatePaging(page + 1, pageSize)}
          disabled={page === totalPages - 1}
          css="paging"
        >
          &gt;
        </Button>
        <Button
          onClick={() => updatePaging(totalPages - 1, pageSize)}
          disabled={page === totalPages - 1}
          css="paging"
        >
          &gt;&gt;
        </Button>
      </div>
    );
  }
  return null;
}

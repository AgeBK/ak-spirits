import styles from "@/app/css/ItemsPerPage.module.css";
import Button from "./button";

export default function ItemsPerPage({
  updatePaging,
  paging,
  totalItems,
}: {
  updatePaging: (page: number, pageSize: number) => void;
  paging: { page: number; pageSize: number };
  totalItems: number;
}) {
  const itemsArr = [20, 40, 60, 80];
  const { page, pageSize } = paging;

  // TODO: need a way to pass 2 styles

  if (totalItems >= 20) {
    return (
      <div className={styles.itemsPPCont}>
        <div className={styles.results}>Results per page:</div>
        {itemsArr.map((val) => (
          <Button
            key={val}
            css={val === pageSize ? "itemsPPSelected" : "itemsPP"}
            // css={`${styles.itemsPerPage} ${val === perPage ? styles.selected : ""}`}
            onClick={() => updatePaging(page, val)}
          >
            {val}
          </Button>
        ))}
      </div>
    );
  }
  return null;
}

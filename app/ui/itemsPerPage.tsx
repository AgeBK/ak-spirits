import styles from "@/app/css/ItemsPerPage.module.css";
import Button from "./button";

export default function ItemsPerPage({
  setPerPage,
  perPage,
}: {
  setPerPage: (value: number) => void;
  perPage: number;
}) {
  const itemsArr = [20, 40, 60, 80];
  // TODO: need a way to pass 2 styles
  return (
    <div className={styles.itemsPPCont}>
      <div className={styles.results}>Results per page:</div>
      {itemsArr.map((val) => (
        <Button
          key={val}
          css={val === perPage ? "itemsPPSelected" : "itemsPP"}
          // css={`${styles.itemsPerPage} ${val === perPage ? styles.selected : ""}`}
          onClick={() => setPerPage(val)}
        >
          {val}
        </Button>
      ))}
    </div>
  );
}

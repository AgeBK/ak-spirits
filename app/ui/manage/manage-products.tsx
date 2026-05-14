import Link from "next/link";
import { ManageProductsProps, SpiritProps } from "@/app/lib/definitions";
import Img from "@/app/ui/image";
import styles from "@/app/css/manage/ManageProducts.module.css";

// renders each row products main manage page (uses CategoryList)
export default function ManageProducts({ arr }: ManageProductsProps) {
  return (
    <div className={styles.list}>
      <div className={styles.table}>
        <header className={styles.row}>
          <div className={styles.col}>Id</div>
          <div className={styles.col}>Name</div>
          <div className={`${styles.col} ${styles.brand}`}>Brand</div>
          <div className={`${styles.col} ${styles.price}`}>Price</div>
          <div className={styles.col}></div>
        </header>
        {arr.map((val: SpiritProps) => {
          const {
            id,
            category,
            sub_category,
            short_name,
            name,
            brand,
            price_normal,
            price_current,
          } = val;
          return (
            <div key={id} className={styles.row}>
              <div className={styles.col}>{id}</div>
              <div className={`${styles.col} ${styles.name}`}>{name}</div>
              <div className={`${styles.col} ${styles.brand}`}>{brand}</div>
              <div className={`${styles.col} ${styles.subCat}`}>
                {sub_category}
              </div>
              <div className={`${styles.col} ${styles.price}`}>
                {price_normal} / <span> {price_current}</span>
              </div>
              <div className={`${styles.col} ${styles.actions}`}>
                <Link
                  href={`/${category.toLowerCase()}/${sub_category.toLowerCase()}/${id}`}
                >
                  <Img
                    imgSrc={`icons/eye.svg`}
                    imgAlt="view"
                    imgWidth={24}
                    imgHeight={24}
                  />
                </Link>
                <Link href={`/manage/edit/${id}`}>
                  <Img
                    imgSrc={`icons/pencil.svg`}
                    imgAlt="edit"
                    imgWidth={24}
                    imgHeight={24}
                  />
                </Link>
                <Link href={`/manage/delete/${id}`}>
                  <Img
                    imgSrc={`icons/trash.svg`}
                    imgAlt="trash"
                    imgWidth={24}
                    imgHeight={24}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

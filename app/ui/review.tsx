import appData from "../lib/appData.json";
import styles from "@/app/css/Review.module.css";

export default function Review({
  sub_category,
  brand,
}: {
  sub_category: string;
  brand: string;
}) {
  const subCatLow: string = sub_category.toLowerCase();
  const spiritReview: string = appData[`${sub_category.toLowerCase()}Review`];
  const productReview: string = spiritReview
    ? spiritReview.replaceAll("[xxxx]", brand)
    : "";

  return (
    <div className={styles.review}>
      <h3 className={styles.hdr}>Product Review:</h3>
      <div className={styles.review}>{productReview}</div>
      <i className={styles.reviewSource}>
        Source *Spirits Monthly: August 2025 - Author: Sir Roger Braithwaite III
      </i>
    </div>
  );
}

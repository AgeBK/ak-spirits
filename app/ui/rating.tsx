import styles from "@/app/css/Rating.module.css";

export default function Rating({
  ratingsAvg,
  ratingsTot,
}: {
  ratingsAvg: number;
  ratingsTot: number;
}) {
  const roundHalf = (num: number) => {
    return Math.round(num * 2) / 2;
  };

  return (
    <>
      <div className={styles.ratingsTot}>{ratingsTot} reviews</div>
      {/* <div>{ratingsAvg}</div> <div>{roundHalf(ratingsAvg)}</div> */}
      <div className={styles.ratings}>
        {Array.from({ length: roundHalf(ratingsAvg) }, (v, i) => (
          <div className={styles.star} key={i}></div>
        ))}
        {!Number.isInteger(ratingsAvg) && (
          <span className={styles.half}>
            <span className={styles.star}></span>
          </span>
        )}
      </div>
    </>
  );
}
// <div className={`${styles.star} ${styles.half} `}></div>

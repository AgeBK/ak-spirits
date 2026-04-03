import appData from "../lib/appData.json";
import Img from "./image";
import Link from "next/link";
import styles from "@/app/css/ShopNow.module.css";

export default function ShopNow() {
  const { shopNow } = appData;

  return (
    <div className={styles.shopContainer}>
      {shopNow.map((val, i) => (
        <div key={val} className={styles.shop}>
          <Link
            href={`/spirits`}
            className={styles.itemCont}
          >
            <Img
              imgSrc={`shop/${i + 1}.jpg`}
              imgAlt={val}
              imgWidth={228}
              imgHeight={171}
            />
            <div className={styles.title}>{val}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

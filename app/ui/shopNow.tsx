import React from "react";
import Img from "./image";
import appData from "../lib/appData.json";
import styles from "@/app/css/ShopNow.module.css";
import Link from "next/link";

export default function ShopNow() {
  const { shopNow } = appData;

  return (
    <div className={styles.shopContainer}>
      {shopNow.map((val, i) => (
        <div key={val} className={styles.shop}>
          <Link
            href={`/`}
            className={styles.itemCont}
            // {price_special && <div >On special</div>}
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

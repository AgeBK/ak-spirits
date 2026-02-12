import React from "react";
import { fetchSpiritById, fetchSpirits } from "../lib/data";
import styles from "@/app/css/Product.module.css";

export default async function Product({ prod }) {
  // const prod = await fetchSpirits();
  console.log(prod);

  console.log("yA mUm");

  return (
    <div className={styles.container}>
      <h1 className={styles.hdr}>Product</h1>
      {Object.entries(prod).map(([key, value]) => {
        console.log(key);
        console.log(value);

        return (
          <>
            <div className={styles.key}>
              <b>{key}</b>
            </div>
            <div className={styles.value}>{value}</div>
            <br />
          </>
        );
      })}
    </div>
  );
}

// export default async function Product({
//   params: { urlCategory, urlSubCategory, urlId },
// }: {
//   params: { urlCategory: string; urlSubCategory: string; urlId: string };
// }) {

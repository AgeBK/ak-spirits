import React from "react";
import Image from "next/image";
// import Price from "./price"; TODO
import styles from "@/app/css/Category.module.css";

type Spirits = {
  brand: string;
  category: string;
  id: string;
  name: string;
  packaging: string;
  price_2_for: string;
  price_current: string;
  price_normal: string;
  ratings_avg: string;
  ratings_tot: number;
  short_name: string;
  sub_category: string;
  unit: string;
  volume: number;
};

export default function Category({ arr }: { arr: Spirits[] }) {
  const imgPath = "/img/spirits/";
  console.log(arr);

  const keys = Object.keys(arr[0]);
  console.log(keys);

  //   const o = {
  //     brand: "Absolut",
  //     category: "Spirits",
  //     id: "83850",
  //     name: "Absolut Vodka 1 Litre",
  //     packaging: "Bottle",
  //     price_2_for: "0.00",
  //     price_current: "66.00",
  //     price_normal: "76.00",
  //     ratings_avg: "4.7500",
  //     ratings_tot: 8,
  //     short_name: "Vodka 1 Litre",
  //     sub_category: "Vodka",
  //     unit: "ea",
  //     volume: 1000,
  //   };

  return (
    <div className={styles.container}>
      {arr.map((item) => {
        const {
          id,
          brand,
          name,
          short_name,
          category,
          sub_category,
          price_normal,
          price_current,
          price_2_for,
          volume,
          unit,
          ratings_avg,
          ratings_tot,
          packaging,
        } = item;
        return (
          <div className={styles.item} key={id}>
            <Image
              src={`${imgPath}${id}.webp`}
              alt={short_name}
              width={50}
              height={150}
            />
            <h2 className={styles.brand}>{brand}</h2>
            <h3 className={styles.sName}>{short_name}</h3>
          </div>
        );
      })}
    </div>
  );
}

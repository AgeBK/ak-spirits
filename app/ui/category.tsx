"use client";

import { useState } from "react";
import Image from "next/image";
import { SpiritProps } from "@/app/lib/definitions";
import Price from "./price";
import SortProducts from "./sortProducts";
import Paging from "./paging";
import ItemsPerPage from "./itemsPerPage";
import styles from "@/app/css/Category.module.css";
import Link from "next/link";

export default function Category({ arr }: { arr: SpiritProps[] }) {
  const [sortOrder, setSortOrder] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(80);
  const totalPages = Math.ceil(arr.length / perPage);
  let pagedArr = [...arr];
  const imgPath = "/img/spirits/";

  pagedArr = arr.slice(page * perPage, page * perPage + perPage);
  console.log(pagedArr);

  return (
    <div className={styles.container}>
      <Paging totalPages={totalPages} setPage={setPage} page={page} />
      <SortProducts arr={arr} setSortOrder={setSortOrder} />
      <article className={styles.items}>
        {pagedArr.map((item) => {
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
              <Link
                href={`/${category.toLowerCase()}/${sub_category.toLowerCase()}/${id}`}
                className={styles.itemCont}
              >
                <Image
                  src={`${imgPath}${id}.webp`}
                  alt={short_name}
                  width={50}
                  height={150}
                />
                <h2 className={styles.brand}>{brand}</h2>
                <h3 className={styles.sName}>{short_name}</h3>
              </Link>
              <Price
                price_current={price_current}
                price_normal={price_normal}
              />
            </div>
          );
        })}
        <ItemsPerPage setPerPage={setPerPage}/>
      </article>
    </div>
  );
}

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

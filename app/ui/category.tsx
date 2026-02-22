"use client";

import { useState } from "react";
import { useCartStore } from "@/app/store";
import { CategoryProps } from "../lib/definitions";
import { filterData } from "../lib/utils";
import FilterType from "./filters/filterType";
import Price from "./price";
import SortProducts from "./sortProducts";
import Paging from "./paging";
import ItemsPerPage from "./itemsPerPage";
import styles from "@/app/css/Category.module.css";
import Link from "next/link";
import Button from "./button";
import ProductItem from "./listItem";

export default function Category({ arr }: CategoryProps) {
  const [sortOrder, setSortOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(40);
  // const { total, deleteItem } = useCartStore();

  let totalPages = Math.ceil(arr.length / perPage);
  let totalFiltered = 0;
  let pagedArr = [...arr];
  console.log("filter Category: " + filterCategory);

  if (filterCategory) {
    pagedArr = filterData(arr, filterCategory);
    totalFiltered = pagedArr.length;
    totalPages = Math.ceil(pagedArr.length / perPage);
  }
  pagedArr = pagedArr.slice(page * perPage, page * perPage + perPage);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <h2 className={styles.filterHdr}>Filters:</h2>
        <FilterType
          arr={arr}
          setFilterCategory={setFilterCategory}
          filterCategory={filterCategory}
        />
      </div>
      <div className={styles.product}>
        <Paging totalPages={totalPages} setPage={setPage} page={page} />
        <SortProducts arr={arr} setSortOrder={setSortOrder} />
        {filterCategory ? (
          <h3 className={styles.filterType}>
            {filterCategory}
            <span className={styles.results}>({totalFiltered} results)</span>
          </h3>
        ) : null}
        <ProductItem arr={pagedArr} css="" />
        <ItemsPerPage setPerPage={setPerPage} perPage={perPage} />
      </div>
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

"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CategoryProps, FilterStateProps } from "../lib/definitions";
import {
  filterByCat,
  filterByBrand,
  filterByPrice,
  filterByOffer,
  filterBySearch,
} from "../lib/utils";
// import appData from "../lib/appData.json";

import Pills from "./pills";
import SortProducts from "./sortProducts";
import Paging from "./paging";
import ItemsPerPage from "./itemsPerPage";
import styles from "@/app/css/Category.module.css";
import ProductItem from "./listItem";
import Filters from "./filters/filters";

// TODO: category? products?
// TODO: need to reset paging when you click a new filter
// TODO: http://localhost:3000/spirits/brandy/462280 (brandy styling on cat page?)

export default function Category({ arr }: CategoryProps) {
  const [, setSortOrder] = useState<string>("");
  const [filters, setFilters] = useState<FilterStateProps>({
    offer: [],
    category: "",
    brand: "",
    price: "",
    // search: location,
  });
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(40);
  let totalPages = Math.ceil(arr.length / perPage);
  let totalFiltered = arr.length;
  let pagedArr = [...arr];
  const searchParams = useSearchParams();
  console.log(searchParams);
  const search = searchParams.get("search");

  const keys: string[] = Object.keys(filters);
  keys.map((key) => {
    const value = filters[key as keyof typeof filters];
    if (value) {
      switch (key) {
        case "offer":
          pagedArr = filterByOffer(pagedArr, value as string[]);
          // totalFiltered = pagedArr.length;
          // totalPages = Math.ceil(pagedArr.length / perPage);
          break;
        case "category":
          pagedArr = filterByCat(pagedArr, value as string);
          // totalFiltered = pagedArr.length;
          // totalPages = Math.ceil(pagedArr.length / perPage);
          break;
        case "brand":
          pagedArr = filterByBrand(pagedArr, value as string);
          // totalFiltered = pagedArr.length;
          // totalPages = Math.ceil(pagedArr.length / perPage);
          break;
        case "price":
          pagedArr = filterByPrice(pagedArr, value as string);
          break;
        default:
          break;
      }
    }
    totalFiltered = pagedArr.length;
    totalPages = Math.ceil(pagedArr.length / perPage);
  });
  console.log("Search");
  console.log(search);

  if (search) {
    console.log("Search term exists:");

    pagedArr = filterBySearch(pagedArr, search as string);
    totalFiltered = pagedArr.length;
    totalPages = Math.ceil(pagedArr.length / perPage);
  }

  // if (filters) {
  //   pagedArr = filterByCat(arr, filters);
  //   totalFiltered = pagedArr.length;
  //   totalPages = Math.ceil(pagedArr.length / perPage);
  // }

  pagedArr = pagedArr.slice(page * perPage, page * perPage + perPage);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {/* <h2 className={styles.filterHdr}>Refine:</h2> */}
        <Filters arr={arr} setFilters={setFilters} filters={filters} />
      </div>
      <div className={styles.products}>
        <div className={styles.productsHdr}>
          <div className={styles.pillsCont}>
            <Pills setFilters={setFilters} filters={filters} />
          </div>
          <div className={styles.productsTotal}>
            ({totalFiltered}) Available:
          </div>
          <SortProducts arr={arr} setSortOrder={setSortOrder} />
        </div>
        <ProductItem arr={pagedArr} css="" />
        <div className={styles.pageCont}>
          <Paging totalPages={totalPages} setPage={setPage} page={page} />
          <ItemsPerPage setPerPage={setPerPage} perPage={perPage} />
        </div>
      </div>
    </div>
  );
}

/* {filters ? (
          <h3 className={styles.filterType}>
            {filters}
            <span className={styles.results}>({totalFiltered} results)</span>
          </h3>
        ) : null} */

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

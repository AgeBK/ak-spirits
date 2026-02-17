"use client";

import { useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/app/store";
import { SpiritProps, CategoryProps } from "../lib/definitions";
import { imgPath } from "@/app/lib/appData.json";
import { addToCart, filterData } from "../lib/utils";
import FilterType from "./filters/filterType";
import Price from "./price";
import SortProducts from "./sortProducts";
import Paging from "./paging";
import ItemsPerPage from "./itemsPerPage";
import styles from "@/app/css/Category.module.css";
import Link from "next/link";
import { validateHeaderName } from "http";

export default function Category({ arr }: CategoryProps) {
  const [sortOrder, setSortOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(40);
  const { items, total, removeItem } = useCartStore();

  let totalPages = Math.ceil(arr.length / perPage);
  let totalFiltered = 0;
  let pagedArr = [...arr];
  console.log("filter Category: " + filterCategory);

  const addCartItem = useCartStore((state) => state.addCartItem);
  const cartItems = useCartStore((state) => state.cartItems);

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
        <br />

        <br />
        <p>
          <b>Cart Items</b>
          {/* {cartItems.map((val) => {
            console.log(val);
            return <div key={val.id}>{val.id}</div>;
          })} */}
        </p>
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
                  css=""
                />
                <button
                  className={styles.addCart}
                  // onClick={() => addToCart(id, name, price_current)}
                  onClick={() => addCartItem(item)}
                >
                  ADD TO CART
                </button>
              </div>
            );
          })}
        </article>
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

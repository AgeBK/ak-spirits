"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  CategoryProps,
  FilterStateProps,
  PagingProps,
} from "../lib/definitions";
import {
  filterByCat,
  filterByBrand,
  filterByPrice,
  filterByOffer,
  filterBySearch,
} from "../lib/utils";
import { maxSmallScreen } from "../lib/appData.json";
import { pagingSettings } from "../lib/appData.json";
import Pills from "./pills";
import SortProducts from "./sortProducts";
import ProductItem from "./listItem";
import Filters from "./filters/filters";
import ScrollTop from "./scrollTop";
import Button from "./button";
import CategoryPaging from "./category-paging";
import usePageWidth from "../hooks/usePageWidth";
import styles from "@/app/css/Category.module.css";

// TODO: category? products?
// TODO: need to reset paging when you click a new filter
// TODO: http://localhost:3000/spirits/brandy/462280 (brandy styling on cat page?)
// TODO: search header like wines?

export default function Category({ arr }: CategoryProps) {
  const [, setSortOrder] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterStateProps>({
    offer: [],
    category: "",
    brand: "",
    price: "",
  });
  const [paging, setPaging] = useState<PagingProps>(pagingSettings);
  let totalPages = Math.ceil(arr.length / paging.pageSize);
  let totalItems = arr.length;
  let pagedArr = [...arr];
  const searchParams = useSearchParams();
  const filtersSmallScreen = usePageWidth(maxSmallScreen) && showFilters;
  const search = searchParams.get("search");
  const { page, pageSize } = paging;

  const keys: string[] = Object.keys(filters);
  keys.map((key) => {
    const value = filters[key as keyof typeof filters];
    if (value) {
      switch (key) {
        case "offer":
          pagedArr = filterByOffer(pagedArr, value as string[]);
          break;
        case "category":
          pagedArr = filterByCat(pagedArr, value as string);
          break;
        case "brand":
          pagedArr = filterByBrand(pagedArr, value as string);
          break;
        case "price":
          pagedArr = filterByPrice(pagedArr, value as string);
          break;
        default:
          break;
      }
    }
    totalItems = pagedArr.length;
    totalPages = Math.ceil(pagedArr.length / paging.pageSize);
  });

  if (search) {
    console.log("search");
    console.log(pagedArr);

    pagedArr = filterBySearch(pagedArr, search as string);
    totalItems = pagedArr.length;
    totalPages = Math.ceil(pagedArr.length / pageSize);
  }

  const updatePaging = (page: number, pageSize: number) => {
    if (window) {
      window.scrollTo(0, 0);
      setPaging({ page, pageSize });
    }
  };

  pagedArr = pagedArr.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div className={styles.categoryCont}>
      <Button onClick={() => setShowFilters(!showFilters)} css="filterBtn">
        {showFilters ? "X" : "Filters"}
      </Button>
      <div className={styles.container}>
        <div className={filtersSmallScreen ? styles.products : styles.filters}>
          <Filters arr={arr} setFilters={setFilters} filters={filters} />
        </div>
        <div className={filtersSmallScreen ? styles.filters : styles.products}>
          <div className={styles.productsHdr}>
            <div className={styles.pillsCont}>
              <Pills setFilters={setFilters} filters={filters} />
            </div>
            <div className={styles.productsTotal}>
              ({totalItems}) Available:
            </div>
            <SortProducts arr={arr} setSortOrder={setSortOrder} />
          </div>
          <ProductItem arr={pagedArr} css="" />
          <div className={styles.pageCont}>
            <CategoryPaging
              totalPages={totalPages}
              updatePaging={updatePaging}
              paging={paging}
              totalItems={totalItems}
            />
          </div>
          <ScrollTop />
        </div>
      </div>
    </div>
  );
}

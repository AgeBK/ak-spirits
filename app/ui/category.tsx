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
  productSearch,
  checkFilters,
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
// TODO: error page wine
// TODO: Image with src "/img/spirits/195355.webp" was detected as the Largest Contentful Paint (LCP). Please add the `loading="eager"` property if this image is above the fold. Read more: https://nextjs.org/docs/app/api-reference/components/image#loading

export default function Category({
  arr,
  urlCategory,
  urlVariety,
}: CategoryProps) {
  console.log("Category");
  console.log(urlCategory);
  console.log(urlVariety);

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
  // const searchParams = useSearchParams();
  const filtersSmallScreen = usePageWidth(maxSmallScreen) && showFilters;
  // const search = searchParams.get("search");
  const { page, pageSize } = paging;

  const updatePaging = (page: number, pageSize: number) => {
    if (window) {
      window.scrollTo(0, 0);
      setPaging({ page, pageSize });
    }
  };

  pagedArr = checkFilters(pagedArr, filters);
  pagedArr = filterBySearch(pagedArr, urlCategory);
  totalItems = pagedArr.length;
  totalPages = Math.ceil(pagedArr.length / pageSize);
  pagedArr = pagedArr.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div className={styles.categoryCont}>
      <Button onClick={() => setShowFilters(!showFilters)} css="filterBtn">
        {showFilters ? "X" : "Filters"}
      </Button>
      <div className={styles.container}>
        <div className={filtersSmallScreen ? styles.products : styles.filters}>
          <Filters
            arr={arr}
            setFilters={setFilters}
            filters={filters}
            urlVariety={urlVariety}
          />
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

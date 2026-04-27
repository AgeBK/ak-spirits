import FilterBrand from "./filterBrand";
import FilterOffers from "./filterOffers";
import FilterPrice from "./filterPrice";
import FilterType from "./filterType";
import { FilterProps } from "@/app/lib/definitions";
import styles from "@/app/css/Filters.module.css";
import Draw from "../draw";

export default function Filters({ arr, setFilters, filters }: FilterProps) {
  return (
    <div className={styles.filterCont}>
      <Draw name="Offers">
        <FilterOffers setFilters={setFilters} filters={filters} />
      </Draw>
      <Draw name="Category">
        <FilterType arr={arr} setFilters={setFilters} filters={filters} />
      </Draw>
      <Draw name="Price">
        <FilterPrice setFilters={setFilters} filters={filters} />
      </Draw>
      <FilterBrand arr={arr} setFilters={setFilters} filters={filters} />
    </div>
  );
}

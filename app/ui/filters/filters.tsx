import FilterBrand from "./filterBrand";
import FilterOffers from "./filterOffers";
import FilterPrice from "./filterPrice";
import FilterType from "./filterType";
import { FilterProps } from "@/app/lib/definitions";
// import styles from "@/app/css/Filters.module.css";

export default function Filters({ arr, setFilters, filters }: FilterProps) {
  return (
    <>
      <FilterOffers setFilters={setFilters} filters={filters} />
      <FilterType arr={arr} setFilters={setFilters} filters={filters} />
      <FilterPrice setFilters={setFilters} filters={filters} />
      <FilterBrand arr={arr} setFilters={setFilters} filters={filters} />
    </>
  );
}

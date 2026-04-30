import { FilterProps } from "@/app/lib/definitions";
import FilterBrand from "./filterBrand";
import FilterOffers from "./filterOffers";
import FilterPrice from "./filterPrice";
import FilterType from "./filterType";
import Accordion from "../accordion";
import styles from "@/app/css/Filters.module.css";

export default function Filters({ arr, setFilters, filters }: FilterProps) {
  return (
    <>
      <div className={styles.filterCont}>
        <h3 className={styles.hdr}>Refine:</h3>
        <hr />
        <Accordion name="Offers">
          <FilterOffers setFilters={setFilters} filters={filters} />
        </Accordion>
        <Accordion name="Category">
          <FilterType arr={arr} setFilters={setFilters} filters={filters} />
        </Accordion>
        <Accordion name="Price">
          <FilterPrice setFilters={setFilters} filters={filters} />
        </Accordion>
        <FilterBrand arr={arr} setFilters={setFilters} filters={filters} />
      </div>
      {/* )} */}
    </>
  );
}

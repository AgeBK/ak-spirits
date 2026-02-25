import React, { SetStateAction, useState } from "react";
import { filterBrand, filterItemByBrand } from "@/app/lib/utils";
import styles from "@/app/css/FilterBrand.module.css";
import { FilterTypeProps, SpiritProps } from "@/app/lib/definitions";

export default function FilterBrand({
  arr,
  setFilters,
  filters,
}: FilterTypeProps) {
  const [filteredBrands, setFilteredBrands] = useState([]);
  const distinctBrands: string[] = arr.reduce(
    (acc: string[], val: SpiritProps) => {
      const brand: string = val.brand;
      if (acc.brands.indexOf(brand) === -1) {
        acc.brands.push(brand);
        acc.items.push(val);
      }
      return acc;
    },
    { brands: [], items: [] },
  );
  console.log(distinctBrands);
  console.log(distinctBrands.brands);
  console.log(distinctBrands.items);

  const handleChange = (e) => {
    const brandArr = filterBrand(distinctBrands.brands, e.target.value);
    const itemByBrand = filterItemByBrand(distinctBrands.items, brandArr);
    setFilteredBrands(brandArr);
    setFilters(brandArr);

    console.log("handleChange");
    console.log(brandArr);
    console.log(itemByBrand);
  };

  return (
    <div className={styles.container}>
      <hr />
      <h3 className={styles.filterHdr}>Brand:</h3>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter brand name:"
      ></input>
      <ul>
        {filteredBrands.map((brand: string) => (
          <li key={brand}>{brand}</li>
        ))}
      </ul>
    </div>
  );
}

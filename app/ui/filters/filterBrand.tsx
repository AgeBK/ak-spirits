import { ChangeEvent, useState } from "react";
import { filterBrand } from "@/app/lib/utils";
import {
  accBrandProps,
  distinctBrandsProps,
  FilterTypeProps,
  SpiritProps,
} from "@/app/lib/definitions";
import Button from "../button";
import styles from "@/app/css/FilterBrand.module.css";

export default function FilterBrand({
  arr,
  setFilters,
  filters,
}: FilterTypeProps) {
  const [filteredBrands, setFilteredBrands] = useState<string[]>([]);
  const [text, setText] = useState("");

  // console.log("Filter Brand Component:");

  const distinctBrands: distinctBrandsProps = arr.reduce(
    (acc: accBrandProps, val: SpiritProps) => {
      const brand: string = val.brand;
      // && val.brand.indexOf(brand) > -1
      if (acc.brands.indexOf(brand) === -1) {
        acc.brands.push(brand);
        acc.items.push(val);
      }
      return acc;
    },
    { brands: [], items: [] },
  );

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    // console.log(value);
    // const brand: string = e.target.value;
    const brandArr = filterBrand(distinctBrands.brands, value);
    setFilteredBrands(brandArr);
    setFilters({ ...filters, brand: value });
    setText(value);
  };

  const handleClick = ({
    currentTarget: { id },
  }: React.MouseEvent<Element, MouseEvent>) => {
    // console.log(id);

    const brandArr: string[] = filterBrand(distinctBrands.brands, id);
    setFilteredBrands(brandArr);
    setText(id);
    setFilters({ ...filters, brand: id });
  };

  const clearInput = () => {
    setText("");
    setFilters({ ...filters, brand: "" });
    setFilteredBrands([]);
  };

  return (
    <div className={styles.container}>
      <hr />
      <h3 className={styles.filterHdr}>Brand:</h3>
      <div className={styles.inputCont}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter brand"
          value={text}
        />
        <span onClick={clearInput} className={styles.clearInput}>
          &times;
        </span>
      </div>
      <ul>
        <div>
          {filteredBrands.map((brand: string) => (
            <Button
              key={brand}
              id={brand}
              onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
                handleClick(e)
              }
              css="brand"
            >
              <li value={brand}>{brand}</li>
            </Button>
          ))}
        </div>
      </ul>
    </div>
  );
}

// const handleClick = (e: { currentTarget: { id: string } }) => {
//   console.log(e);

//   const brand: string = e.currentTarget.id;
//   const brandArr: string[] = filterBrand(distinctBrands.brands, brand);
//   setFilteredBrands(brandArr);
//   setText(brand);
//   setFilters({ ...filters, brand });

//   console.log(brand);
// };

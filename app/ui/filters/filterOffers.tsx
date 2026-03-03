import { ChangeEvent, useState } from "react";
import styles from "@/app/css/FilterOffers.module.css";
import { FilterTypeProps } from "@/app/lib/definitions"; // TODO: check all filters props
import Button from "../button";

export default function FilterOffers({ setFilters, filters }: FilterTypeProps) {
  const [isChecked, setIsChecked] = useState({
    Specials: false,
    "Multi Buy": false,
  });
  console.log("isChecked");
  console.log(isChecked);

  const offers = ["Specials", "Multi Buy"];

  // TODO: Check specials and multi buy together and against DB??
  // TODO: clear link not rendering next to offers when selected??

  console.log("FilterOffers component");

  const handleChange = ({
    target: { value, checked },
  }: ChangeEvent<HTMLInputElement>) => {
    // console.log("Filter Offer handleChange");
    // console.log(filters);

    // // console.log(e);
    // console.log(value);
    // console.log(checked);

    // const brand: string = e.target.value;
    // const brandArr = filterBrand(distinctBrands.brands, value);
    // setFilteredBrands(brandArr);
    console.log(value);

    const check = isChecked[value];
    console.log(check);

    const arr = [...filters.offer];
    console.log(arr);

    if (checked) {
      arr.push(value);
    } else {
      // clear(value);
      arr.filter((val) => val == value);
    }
    console.log(arr);
    setIsChecked({ ...isChecked, [value]: checked });
    setFilters({ ...filters, offer: arr });
  };

  const clear = (value: string) => {
    // TODO: check this?? make function global??
    const arr = [...filters.offer].filter((v) => value !== v);
    setIsChecked({ ...isChecked, [value]: !isChecked[value] });

    // console.log(filters.offer);
    // console.log(arr);

    return arr;
  };

  return (
    <div className={styles.filterOffers}>
      <h3 className={styles.filterHdr}>Offers:</h3>
      <ul className={styles.offer}>
        {offers.map((val, i) => (
          <li key={val}>
            <input
              type="checkbox"
              value={val}
              onChange={handleChange}
              id={val}
              name="offer"
              checked={isChecked[val]}
            />
            <label htmlFor={val}>{val.replaceAll("_", " ")}</label>
            {/* {filters.offer[i] === val && ( */}
            {isChecked[val] && (
              <Button
                onClick={() => setFilters({ ...filters, offer: clear(val) })}
                css="clear"
              >
                clear
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

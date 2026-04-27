import { ChangeEvent, useState } from "react";
import { FilterProps } from "@/app/lib/definitions"; // TODO: check all filters props
import appData from "@/app/lib/appData.json";
import Button from "../button";
import styles from "@/app/css/FilterOffers.module.css";

export default function FilterOffers({ setFilters, filters }: FilterProps) {
  console.log("FilterOffers component");
  const [isChecked, setIsChecked] = useState({
    Specials: false,
    "Multi Buy": false,
  });

  const { offers } = appData;

  // TODO: Check specials and multi buy together and against DB??
  // TODO: clear link not rendering next to offers when selected??

  const handleChange = ({
    target: { value, checked },
  }: ChangeEvent<HTMLInputElement>) => {
    // value either 'Specials' or 'Multi Buy'
    console.log("handleChange OFFER");
    console.log(checked);

    let offerArr = [...filters.offer]; // copy state
    if (checked) {
      offerArr.push(value);
    } else {
      offerArr = offerArr.filter((val) => val !== value);
    }
    setIsChecked({ ...isChecked, [value]: checked });
    setFilters({ ...filters, offer: offerArr });
  };

  const clear = (value: keyof typeof isChecked) => {
    // const clear = (value: string) => {
    const arr = [...filters.offer].filter((v) => value !== v);
    setIsChecked({ ...isChecked, [value]: !isChecked[value] });
    return arr;
  };

  return (
    <div className={styles.filterOffers}>
      <ul className={`${styles.offer}`}>
        {offers.map((val) => {
          const v: keyof typeof isChecked = val as keyof typeof isChecked;
          return (
            <li key={val}>
              <input
                type="checkbox"
                value={val}
                onChange={handleChange}
                id={val}
                name="offer"
                checked={isChecked[v]}
              />
              <label htmlFor={val}>{val.replaceAll("_", " ")}</label>
              {isChecked[v] && (
                <Button
                  onClick={() =>
                    setFilters({
                      ...filters,
                      offer: clear(v),
                    })
                  }
                  css="clear"
                >
                  clear
                </Button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import React, { ChangeEvent } from "react";
import { SpiritProps, FilterArrProps } from "@/app/lib/definitions";
import Button from "../button";
import styles from "@/app/css/FilterType.module.css";

// TODO: similar styles in price?
// TODO: need to unselect radio button when handleClick handleClick/delete pill

export default function FilterType({
  arr,
  setFilters,
  filters,
}: FilterArrProps) {
  
  const distinctSpirits: string[] = arr.reduce(
    (acc: string[], val: SpiritProps) => {
      const subCat: string = val.sub_category;
      if (acc.indexOf(subCat) === -1) acc.push(subCat);
      return acc;
    },
    [],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setFilters({ ...filters, category: e.target.value });

  const handleClick = () => setFilters({ ...filters, category: "" });

  return (
    <div className={styles.container}>
      <hr />
      <h3 className={styles.filterHdr}>Category:</h3>
      <ul className={styles.category}>
        {distinctSpirits.map((val) => (
          <li key={val}>
            <input
              type="radio"
              value={val}
              onChange={handleChange}
              id={val}
              name="cat"
              checked={filters.category === val}
            />
            <label htmlFor={val}>{val}</label>
            {filters && filters.category === val && (
              <Button onClick={handleClick} css="clear">
                clear
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

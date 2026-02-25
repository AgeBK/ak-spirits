import React from "react";
import {
  SpiritProps,
  CategoryProps,
  FilterTypeProps,
} from "@/app/lib/definitions";
import styles from "@/app/css/FilterType.module.css";

// TODO: similar styles in price?

export default function FilterType({
  arr,
  setFilters,
  filters,
}: FilterTypeProps) {
  const distinctSpirits: string[] = arr.reduce(
    (acc: string[], val: SpiritProps) => {
      const subCat: string = val.sub_category;
      if (acc.indexOf(subCat) === -1) acc.push(subCat);
      return acc;
    },
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFilters({ ...filters, category: e.target.value });

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
            />
            <label htmlFor={val}>{val}</label>
            {filters && filters.category === val && (
              <button
                onClick={() => setFilters({ ...filters, category: "" })}
                className={styles.clear}
              >
                clear
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

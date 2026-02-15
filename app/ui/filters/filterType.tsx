import React from "react";
import { SpiritProps, CategoryProps, FilterTypeProps } from "@/app/lib/definitions";
import styles from "@/app/css/FilterType.module.css";

export default function FilterType({
  arr,
  setFilterCategory,
  filterCategory,
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
    setFilterCategory(e.target.value);

  return (
    <div className={styles.container}>
      <h3 className={styles.filterHdr}>Category</h3>
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
            {filterCategory && filterCategory === val && (
              <button
                onClick={() => setFilterCategory("")}
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

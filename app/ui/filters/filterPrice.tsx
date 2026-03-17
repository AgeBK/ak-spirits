import { FilterProps } from "@/app/lib/definitions";
import appData from "../../lib/appData.json";
import styles from "@/app/css/FilterPrice.module.css";
import Button from "../button";

export default function FilterPrice({ setFilters, filters }: FilterProps) {
  const { priceArr } = appData;

  // console.log("FilterPrice");
  // console.log(priceArr);

  return (
    <div className={styles.container}>
      <hr /> <h3 className={styles.filterHdr}>Price:</h3>
      <ul className={styles.price}>
        {priceArr.map((val) => {
          const { text, value } = val;
          return (
            <li key={value} value={value}>
              <input
                type="radio"
                id={value}
                name="priceFilter"
                value={value}
                checked={filters.price === value}
                onChange={() => setFilters({ ...filters, price: value })}
                className={styles.radio}
              />
              <label htmlFor={value} className={styles.label}>
                {text}
              </label>
              {filters && filters.price === value && (
                <Button
                  onClick={() => setFilters({ ...filters, price: 0 })}
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

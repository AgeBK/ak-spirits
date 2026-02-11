"use client";

import { SpiritProps } from "@/app/lib/definitions";
import styles from "@/app/css/SortProducts.module.css";

export default function SortProducts({
  arr,
  setSortOrder,
}: {
  arr: SpiritProps[];
  setSortOrder: (value: string) => void;
}) {
  const price = (value?: string) => {
    arr.sort((a, b) => {
      const priceA = a.price_current;
      const priceB = b.price_current;
      return value ? priceA - priceB : priceB - priceA;
    });
  };

  const sortBy = ["--- Select ---", "$", "$$$", "rating", "A-Z", "Z-A"];

  const handleChange = (e) => {
    const { value } = e.target;
    setSortOrder(value);
    console.log("Selection changed to:", value);

    switch (value) {
      case "$":
        price(value);
        break;
      case "$$$":
        price();
        break;
      case "rating":
        console.log("Sorting by rating");
        break;
      case "A-Z":
        console.log("Sorting by name ascending");
        arr.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case "Z-A":
        console.log("Sorting by name descending ");
        arr.sort((a, b) => b.brand.localeCompare(a.brand));
        break;
      default:
        console.log("No sorting applied");
    }
  };

  return (
    <div className={styles.container}>
      <select className={styles.sortBy} onChange={handleChange}>
        {sortBy.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

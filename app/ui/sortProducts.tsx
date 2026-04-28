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

  const rating = () => {};

  const sortBy = ["--- Select ---", "$", "$$$", "Rating", "A-Z", "Z-A"];

  const handleChange = (e) => {
    const { value } = e.target;
    setSortOrder(value);
    console.log("Selection changed to:", value);
    // TODO: rating??

    switch (value) {
      case "$":
        price(value);
        break;
      case "$$$":
        price();
        break;
      case "Rating":
        arr.sort((a, b) => b.ratings_avg - a.ratings_avg);
        break;
      case "A-Z":
        arr.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case "Z-A":
        arr.sort((a, b) => b.brand.localeCompare(a.brand));
        break;
      default:
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

"use client";

import { SpiritProps } from "@/app/lib/definitions";
import { sortBy } from "@/app/lib/appData.json";
import styles from "@/app/css/SortProducts.module.css";

export default function SortProducts({
  arr,
  setSortOrder,
}: {
  arr: Record<string, SpiritProps>[]; // TODO:
  setSortOrder: (value: string) => void;
}) {
  const price = (value?: string) => {
    arr.sort((a, b) => {
      const priceA = Number(a.price_current);
      const priceB = Number(b.price_current);
      return value ? priceA - priceB : priceB - priceA;
    });
  };

  const saleItemsFirst = () => {
    arr.sort(({ price_special }) => (price_special ? -1 : 1));
    return arr;
  };

  const handleChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    setSortOrder(value);
    switch (value) {
      case "$":
        price(value);
        break;
      case "$$$":
        price();
        break;
      case "Sale":
        saleItemsFirst();
        break;
      case "A-Z":
        arr.sort((a, b) => {
          const brandA = String(a.brand);
          const brandB = String(b.brand);
          return brandA.localeCompare(brandB);
        });
        break;
      case "Z-A":
        arr.sort((a, b) => {
          const brandA = String(a.brand);
          const brandB = String(b.brand);
          return brandB.localeCompare(brandA);
        });
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

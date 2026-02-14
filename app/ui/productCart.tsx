"use client";

import { useState } from "react";
import { addToCart } from "@/app/lib/utils";
import { SpiritProps } from "../lib/definitions";
import Img from "@/app/ui/image";
import styles from "@/app/css/ProductCart.module.css";

export default function ProductCart({ prod }: SpiritProps) {
  // product page cart
  const [count, setCount] = useState<number>(1);

  console.log(addToCart);

  const {
    id,
    brand,
    name,
    short_name,
    category,
    sub_category,
    price_normal,
    price_current,
    price_2_for,
    volume,
    unit,
    ratings_avg,
    ratings_tot,
    packaging,
  } = prod;

  const handleCount = (e: React.MouseEvent<Element, MouseEvent>) => {
    const { textContent } = e.currentTarget;
    if (textContent === "+") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  let packagingImg = "";
  switch (packaging) {
    case "Bottle":
      packagingImg = "wineSil.png";
      break;
    case "Can":
      packagingImg = "barrelSil.png";
      break;
    case "Box":
      packagingImg = "barrelSil.png";
      break;
    default:
      break;
  }

  return (
    <div className={styles.cartTableCont}>
      <div className={styles.cartTable}>
        <div className={styles.cartBottle}>
          <div className={styles.packImg}>
            <Img
              imgSrc={`icons/${packagingImg}`}
              imgAlt=""
              imgWidth={18}
              imgHeight={40}
            />
          </div>
          <div className={styles.price}>
            ${price_current}/{packaging}
          </div>
        </div>
        <div className={styles.cartAmt}>
          <button onClick={handleCount} disabled={count < 2}>
            -
          </button>
          <span className={styles.count}>{count}</span>
          <button onClick={handleCount}>+</button>
        </div>
        <div className={styles.cartAdd}>
          <button
            className={styles.addCart}
            onClick={() => addToCart(id, name, price_current)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

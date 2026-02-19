"use client";

import { useState } from "react";
import { useCartStore } from "../store";

// import { addToCart } from "@/app/lib/utils";
import { CategoryProps, SpiritProps } from "../lib/definitions";
import Img from "@/app/ui/image";
import styles from "@/app/css/ProductCart.module.css";
import Button from "./button";

export default function ProductCart({ arr }: CategoryProps) {
  // product page cart
  const [count, setCount] = useState<number>(1);
  const { cartItems, removeItem, deleteItem, addCartItem, total } =
    useCartStore();
  const itemCnt = cartItems.length;
  const cartTotal = total();

  // console.log(addToCart);

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
  } = arr;

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
          <Button onClick={handleCount} disabled={count < 2}>
            -
          </Button>
          <span className={styles.count}>{count}</span>
          <Button onClick={handleCount}>+</Button>
        </div>
        <div className={styles.cartAdd}>
          <Button onClick={() => addCartItem(item, count)} css="">
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
}

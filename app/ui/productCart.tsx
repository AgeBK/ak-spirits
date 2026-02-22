"use client";

import { useState } from "react";
import { useCartStore } from "../store";
import { CategoryProps } from "../lib/definitions";
import Img from "@/app/ui/image";
import Button from "./button";
import styles from "@/app/css/ProductCart.module.css";

export default function ProductCart({ productObj }: CategoryProps) {
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
  } = productObj;

  const handleCount = (e: React.MouseEvent<Element, MouseEvent>) => {
    const { textContent } = e.currentTarget;
    if (textContent === "+") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  // TODO: images
  let packagingImg = "";
  switch (packaging) {
    case "Bottle":
      packagingImg = "bottle.jpg";
      break;
    case "Can":
      packagingImg = "can.png";
      break;
    case "Box":
      packagingImg = "box.png"; // TODO: check image
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
              imgWidth={16}
              imgHeight={36}
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
          <Button onClick={() => addCartItem(productObj, count)} css="">
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
}

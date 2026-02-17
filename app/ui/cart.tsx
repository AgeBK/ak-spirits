"use client";

import { useCartStore } from "../store";
import Img from "./image";
import Price from "./price";
import Button from "./button";
import styles from "@/app/css/Cart.module.css";

export default function Cart() {
  const { cartItems } = useCartStore();
  const { itemCnt } = cartItems.length;
  const { items, total, removeItem } = useCartStore();

  removeItem;

  return (
    <div className={styles.container}>
      <b>
        {itemCnt ? `You have ${itemCnt} item${itemCnt !== 1 ? "s" : ""}` : null}
      </b>
      {cartItems.map((val) => {
        const {
          id,
          brand,
          category,
          sub_category,
          name,
          short_name,
          price_normal,
          price_current,
          price_2_for,
          qty,
        } = val;
        return (
          <div className={styles.cartItem} key={id}>
            <div className={styles.img}>
              <Img
                imgSrc={`spirits/${id}.webp`}
                imgAlt={name}
                // imgWidth={packaging === "Cask" ? 40 : 20}
                imgWidth={30}
                imgHeight={80}
              />
            </div>
            <div className={styles.details}>
              <h3 className={styles.brand}>{brand}</h3>
              <div className={styles.sName}>{short_name}</div>
            </div>
            <div className={styles.price}>
              <Button onClick={() => removeItem(id)} css="Remove">
                <Img
                  imgSrc={`close4.png`}
                  imgAlt={"close"}
                  // imgWidth={packaging === "Cask" ? 40 : 20}
                  imgWidth={18}
                  imgHeight={18}
                />
              </Button>
              <Price
                price_current={price_current}
                price_normal={price_normal}
                css="cart"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

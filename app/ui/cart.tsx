"use client";

import { useCartStore } from "../store";
import Img from "./image";
import Button from "./button";
import { CartProps } from "../lib/definitions";
import styles from "@/app/css/Cart.module.css";

export default function Cart() {
  const { cartItems, removeItem, deleteItem, addCartItem, total } =
    useCartStore();
  const itemCnt = cartItems.length;
  const cartTotal = total();

  return (
    <div className={styles.container}>
      <div className={styles.itemCnt}>
        {itemCnt ? `You have ${itemCnt} item${itemCnt !== 1 ? "s" : ""}` : null}
      </div>
      {cartItems.map((item: CartProps) => {
        const {
          id,
          brand,
          category,
          sub_category,
          // name,
          short_name,
          // price_normal,
          price_current,
          price_2_for,
          qty,
        } = item;
        return (
          <div className={styles.cartItem} key={id}>
            <div className={styles.img}>
              <Img
                imgSrc={`spirits/${id}.webp`}
                imgAlt={short_name}
                // imgWidth={packaging === "Cask" ? 40 : 20}
                imgWidth={19}
                imgHeight={80}
              />
            </div>
            <div className={styles.details}>
              <h3 className={styles.brand}>{brand}</h3>
              <div className={styles.sName}>{short_name}</div>
              <div className={styles.qtyCont}>
                <span className={styles.qtyUpdate}>
                  <Button
                    onClick={() =>
                      qty === 1 ? deleteItem(id) : removeItem(id)
                    }
                    css="cartMinus"
                  ></Button>
                </span>
                <span className={styles.qty}>{qty}</span>
                <span className={styles.qtyUpdate}>
                  <Button
                    onClick={() => addCartItem(item)}
                    css="cartAdd"
                  ></Button>
                </span>
              </div>
            </div>
            <div className={styles.price}>
              <Button onClick={() => deleteItem(id)} css="cartDel">
                <Img
                  imgSrc={`close4.png`}
                  imgAlt={"close"}
                  // imgWidth={packaging === "Cask" ? 40 : 20}
                  imgWidth={22}
                  imgHeight={22}
                />
              </Button>
              <div className={styles.price}>${price_current * qty}</div>
            </div>
          </div>
        );
      })}
      {itemCnt > 0 && (
        <div className={styles.total}>
          <b>Items: {itemCnt}</b>
          <b>Total: ${cartTotal}</b>
        </div>
      )}
    </div>
  );
}

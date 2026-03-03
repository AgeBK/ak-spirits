"use client";

import { CategoryProps, ListItemProps, SpiritProps } from "../lib/definitions";
import { imgPath } from "@/app/lib/appData.json";
import { useCartStore } from "../store";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import Price from "./price";
import styles from "@/app/css/ListItem.module.css";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export default function ListItem({ arr, css }: ListItemProps) {
  const addCartItem = useCartStore((state) => state.addCartItem);
  // const cartItems = useCartStore((state) => state.cartItems);

  // console.log(arr);

  return (
    <article className={`${styles.items} ${styles[css]}`}>
      {arr.map((item) => {
        const {
          id,
          brand,
          // name,
          short_name,
          category,
          sub_category,
          price_normal,
          price_current,
          price_2_for,
          // volume,
          // unit,
          // ratings_avg,
          // ratings_tot,
          // packaging,
          price_special,
        } = item;

        return (
          <div className={styles.item} key={id}>
            <Link
              href={`/${category.toLowerCase()}/${sub_category.toLowerCase()}/${id}`}
              className={styles.itemCont}

              // {price_special && <div >On special</div>}
            >
              {price_2_for > 0 && (
                <div className={styles.twoFor}>
                  <div className={styles.two}>
                    2 <br />
                    <div className={dancingScript.className}>for</div>
                  </div>
                  ${price_2_for}
                </div>
              )}
              <Image
                src={`${imgPath}${id}.webp`}
                alt={short_name}
                width={50}
                height={150}
              />
              <h2 className={styles.brand}>{brand}</h2>
              <h3 className={styles.sName}>{short_name}</h3>
            </Link>
            <Price
              price_current={price_current}
              price_normal={price_normal}
              css=""
            />
            <Button onClick={() => addCartItem(item)} css="itemAddCart">
              ADD TO CART
            </Button>
          </div>
        );
      })}
    </article>
  );
}

"use client";

import styles from "@/app/css/ListItem.module.css";
import { CategoryProps } from "../lib/definitions";
import { imgPath } from "@/app/lib/appData.json";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "../store";
import Button from "./button";
import Price from "./price";

type ListItemProps = {
  arr: CategoryProps;
  css: string;
};

export default function LitItem({ arr, css }: ListItemProps) {
  const addCartItem = useCartStore((state) => state.addCartItem);
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <article className={`${styles.items} ${styles[css]}`}>
      {arr.map((item) => {
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
        } = item;

        return (
          <div className={styles.item} key={id}>
            <Link
              href={`/${category.toLowerCase()}/${sub_category.toLowerCase()}/${id}`}
              className={styles.itemCont}
            >
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

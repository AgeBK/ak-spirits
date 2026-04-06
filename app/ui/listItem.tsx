"use client";

import { ListItemProps } from "../lib/definitions";
import { useCartStore } from "../store";
import { Dancing_Script } from "next/font/google";
import { imgHeightListItem } from "@/app/lib/appData.json";
import ImgAutoWidth from "./image-auto-width";
import Link from "next/link";
import Button from "./button";
import Price from "./price";
import Img from "./image";
import styles from "@/app/css/ListItem.module.css";
import ImgFill from "./image-fill";
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export default function ListItem({ arr, css, hdr }: ListItemProps) {
  const addCartItem = useCartStore((state) => state.addCartItem);
  // TODO: SEO, articles, sections, check box/gift images

  return (
    <section className={styles[css]}>
      {hdr && <h3 className={styles.hdr}>{hdr}:</h3>}
      <div className={styles.items}>
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
            packaging,
            // price_special,
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
                <ImgFill
                  src={`spirits/${id}.webp`}
                  alt={short_name}
                  css="product160h"
                  priority={false} // priority = max in view onload
                />
                <h2 className={styles.brand}>{brand}</h2>
                <h3 className={styles.sName}>{short_name}</h3>
                {/* <div>{ratings_avg}</div> */}
              </Link>
              <Price
                price_current={price_current}
                price_normal={price_normal}
                css=""
              />
              <Button onClick={() => addCartItem(item)} css="">
                ADD TO CART
                <span className={styles.btnCart}>
                  <Img
                    imgSrc={`icons/cartEmpty.svg`}
                    imgAlt="cart empty"
                    imgWidth={20}
                    imgHeight={20}
                  />
                </span>
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { CategoryProps, SpiritProps } from "../lib/definitions";
import appData from "../lib/appData.json";
import Img from "./image";
import ImgFill from "./image-fill";
import ProductCart from "./productCart";
import Price from "./price";
import styles from "@/app/css/Product.module.css";

// TODO: 2 for??

export default async function Product({ arr }: CategoryProps) {
  console.log(arr);
  // console.log(appData);

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
  const subCatLow = sub_category.toLowerCase();
  const spiritType = appData[subCatLow];
  const spiritReview = appData[`${subCatLow}Review`];
  const productDesc = spiritType.replaceAll("[xxxx]", brand);

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <div className={styles.imgCont}>
          <ImgFill
            imgSrc={`spirits/${id}.webp`}
            imgAlt={short_name}
            imgStyle="product520h"
            imgPriority={false} // priority = max in view onload
          />
        </div>
        <div className={styles.details}>
          <h2 className={styles.hdr}>{brand}</h2>
          <div className={styles.name}>{short_name}</div>
          <div className={styles.desc}>{productDesc}</div>
          <Price
            price_current={price_current}
            price_normal={price_normal}
            css="product"
          />
          <div className={styles.rateTot}>{ratings_tot} reviews</div>{" "}
          {/* <div className={styles.rateAvg}>{ratings_avg}</div> */}
          {Array.from({ length: ratings_avg }, (v, i) => (
            <div className={styles.star} key={i}></div>
          ))}
          {/* <div className={styles.productCart}> */}
          <ProductCart arr={arr} />
          {/* </div> */}
        </div>
      </div>
      <div className={styles.reviewCont}>
        <h3 className={styles.hdr}>Product Review:</h3>
        <div className={styles.review}>{spiritReview}</div>
        <i className={styles.reviewSource}>
          Source *Spirits Monthly: August 2025 - Author: Sir Roger Braithwaite
          III
        </i>
      </div>
      <h3 className={styles.hdr}>Similar Products:</h3>
    </div>
  );
}

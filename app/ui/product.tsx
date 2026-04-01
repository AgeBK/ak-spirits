import { CategoryProps, SpiritProps } from "../lib/definitions";
import appData from "../lib/appData.json";
import Img from "./image";
import ImgFill from "./image-fill";
import ProductCart from "./productCart";
import Price from "./price";
import ListItem from "./listItem";
import styles from "@/app/css/Product.module.css";
import Rating from "./rating";
import Review from "./review";

// TODO: 2 for??
// TODO: update readme
// TODO: Theme switcher?
// TODO: page length

export default async function Product({
  productObj,
  similarArr,
}: CategoryProps) {
  // console.log(productObj);
  // console.log(similarArr);
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
  }: SpiritProps = productObj;

  const subCatLow: string = sub_category.toLowerCase();
  const spiritType: string = appData[subCatLow];
  const spiritReview: string = appData[`${subCatLow}Review`];
  const productDesc: string = spiritType
    ? spiritType.replaceAll("[xxxx]", brand)
    : "";
  const productReview: string = spiritReview
    ? spiritReview.replaceAll("[xxxx]", brand)
    : "";

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
          <Rating ratingsAvg={ratings_avg} ratingsTot={ratings_tot} />
          {/* <div className={styles.productCart}> */}
          <ProductCart productObj={productObj} />
          {/* </div> */}
        </div>
      </div>
      <Review sub_category={sub_category} brand={brand} />
      <ListItem arr={similarArr} css="similar" hdr="Similar items" />
    </div>
  );
}

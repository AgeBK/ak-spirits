import { CategoryProps, SpiritProps } from "../lib/definitions";
import appData from "../lib/appData.json";
import ImgFill from "./image-fill";
import ProductCart from "./productCart";
import Price from "./price";
import ListItem from "./listItem";
import styles from "@/app/css/Product.module.css";
import Rating from "./rating";
import Review from "./review";
import { notEmptyObj } from "../lib/utils";

// TODO: 2 for??
// TODO: update readme
// TODO: TypeError: Cannot destructure property 'id' of 'productObj' as it is undefined. at Product (app\ui\product.tsx:24:5)
// TODO: search results like fine wines (check 1 product result)

export default async function Product({
  productObj,
  relatedProducts,
}: CategoryProps) {
  // console.log(relatedProducts);
  // console.log(appData);
  // console.log("productObj");
  // console.log(productObj);

  if (notEmptyObj(productObj)) {
    const {
      id,
      brand,
      short_name,
      sub_category,
      price_normal,
      price_current,
      ratings_avg,
      ratings_tot,
    }: SpiritProps = productObj;

    const subCatLow: string = sub_category.toLowerCase();
    const spiritType =
      appData[subCatLow as keyof typeof appData] ||
      appData["generic" as keyof typeof appData];
    // const spiritReview =
    //   appData[`${subCatLow}Review` as keyof typeof appData] ||
    //   appData["genericReview" as keyof typeof appData];
    const productDesc: string = spiritType
      ? spiritType.replaceAll("[xxxx]", brand)
      : "";
    // const productReview = spiritReview
    //   ? spiritReview.replaceAll("[xxxx]", brand)
    //   : "";

    return (
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.imgCont}>
            <ImgFill
              src={`spirits/${id}.webp`}
              alt={short_name}
              css="product520h"
              priority={false} // priority = max in view onload
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
        <ListItem arr={relatedProducts} css="similar" hdr="Similar items" />
      </div>
    );
  }

  return null; // TODO: notfound() ?
}

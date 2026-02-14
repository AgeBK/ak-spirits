import { SpiritProps } from "../lib/definitions";
import appData from "../lib/appData.json";
import Img from "./image";
import ImgFill from "./image-fill";
import ProductCart from "./productCart";
import Price from "./price";
import styles from "@/app/css/Product.module.css";

export default async function Product({ prod }: SpiritProps) {
  console.log(prod);

  console.log(appData);

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
  } = prod;
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
          <div className={styles.desc}>Description here</div>
          <Price
            price_current={price_current}
            price_normal={price_normal}
            css="product"
          />
          <div className={styles.rateAvg}>{ratings_avg}</div>
          <div className={styles.rateTot}>{ratings_tot} reviews</div>
          {Array.from({ length: ratings_avg }, (v, i) => (
            <div className={styles.star} key={i}></div>

            // <Img
            //
            //   imgSrc={`redstar.png`}
            //   imgAlt="ratings"
            //   imgWidth={20}
            //   imgHeight={20}
            //   imgPriority={false}
            // />
          ))}
          {/* <div className={styles.productCart}> */}
          <ProductCart prod={prod} />
          {/* </div> */}
        </div>
      </div>

      {/* <h1 className={styles.hdr}>Product</h1> */}
    </div>
  );
}

/* <Img
          imgSrc={`spirits/${id}.webp`}
          imgAlt="AK spirits"
          imgWidth={80}
          imgHeight={80}
          imgPriority={true}
        /> */

// export default async function Product({
//   params: { urlCategory, urlSubCategory, urlId },
// }: {
//   params: { urlCategory: string; urlSubCategory: string; urlId: string };
// }) {

// {Object.entries(prod).map(([key, value]) => {
//     console.log(key);
//     console.log(value);

//     return (
//       <>

//         <div className={styles.key}>
//           <b>{key}</b>
//         </div>
//         <div className={styles.value}>{value}</div>
//         <br />
//       </>
//     );
//   })}

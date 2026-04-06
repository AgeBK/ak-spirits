import { sale6Bot } from "../lib/appData.json";
import { SpiritProps } from "../lib/definitions";
import styles from "@/app/css/Sale6Bot.module.css";
import ImgFill from "./image-fill";

export default function Sale6Bot({ data }) {
  const dataArr = [data.slice(0, 3), data.slice(3)]; // split into 2 arrays of 3 products
  console.log(dataArr);

  return (
    <div className={styles.sale3Cont}>
      {sale6Bot.map((val, i) => (
        <div key={val} className={styles.item}>
          <div className={styles.details}>
            <h2 className={styles.hdr}>{sale6Bot[i]}</h2>
            <div className={styles.shop}>Shop now</div>
          </div>
          <div className={styles.products}>
            {dataArr[i].map((val: SpiritProps) => {
              const { id, price_current, short_name, brand, packaging } = val;
              return (
                <div key={id} className={styles.product}>
                  <div className={styles.price}>
                    <span>$</span>
                    {price_current}
                  </div>
                  <ImgFill
                    src={`spirits/${id}.webp`}
                    alt={brand}
                    css="product160h"
                    priority={true} // priority = max in view onload
                  />
                  {/* <Img
                    imgSrc={`spirits/${id}.webp`}
                    imgAlt={brand}
                    imgWidth={packaging === "Box" ? 80 : 50}
                    imgHeight={160}
                  /> */}
                  {/* <ImgAutoWidth
                    src={`${id}.webp`}
                    alt={short_name}
                    height={120}
                    style=""
                    priority={false} // TODO:
                  /> */}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

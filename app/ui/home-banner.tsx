import appData from "../lib/appData.json";
import Img from "./image";
import styles from "@/app/css/Home.module.css";

export default function HomeBanner() {
  const { bannerBlurb } = appData;

  return (
    <div className={styles.homeBannerContainer}>
      <picture>
        <source media="(max-width: 768px)" srcSet="./img/bg/banner2.jpg" />
        <Img
          imgSrc={`bg/banner2.webp`}
          imgAlt="AK Spirits"
          imgWidth={1400}
          imgHeight={381}
        />
      </picture>
      <div className={styles.blurb}>
        <h3>SPIRITS</h3>
        <span>{bannerBlurb}</span>
      </div>
    </div>
  );
}

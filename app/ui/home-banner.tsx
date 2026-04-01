import React from "react";
import styles from "@/app/css/Home.module.css";
import Img from "./image";

export default function HomeBanner() {
  return (
    <div className={styles.homeBannerContainer}>
      <picture>
        <source media="(max-width: 768px)" srcSet="./img/bg/banner2.jpg" />
        <Img
          // imgSrc={`icons/${itemAdded ? "cartNotEmpty" : "cartEmpty"}.svg`}
          imgSrc={`bg/banner2.webp`}
          imgAlt="AK Spirits"
          // imgWidth={packaging === "Cask" ? 40 : 20}
          imgWidth={1400}
          imgHeight={381}
        />
      </picture>
      <div className={styles.blurb}>
        <h3>SPIRITS</h3>
        <span>
          Spirits are distilled to perfection and contain an ABV ranging
          anywhere from 20 to 90%. The most popular spirits drunks drink are
          bourbon, rum, gin, tequila, and whisky. Also, known as distilled
          liquor don&apos;t miss out on these iconic beverages that are perfect
          ice-breakers.
        </span>
      </div>
    </div>
  );
}

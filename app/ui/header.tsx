"use client";

import Link from "next/link";
// import Nav from "./nav";
import Img from "./image";
import Cart from "./cart";
import styles from "@/app/css/Header.module.css";
import ThemeToggle from "./toggle";

export default function Header() {
  // logos switch based on theme with css (or you get flicker)

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoLight}>
              <Img
                imgSrc={"logos/AK.png"}
                imgAlt="AK spirits"
                imgWidth={80}
                imgHeight={80}
                imgPriority={true}
              />
            </span>
            <span className={styles.logoDark}>
              <Img
                imgSrc={"logos/AKD.png"}
                imgAlt="AK spirits"
                imgWidth={80}
                imgHeight={80}
                imgPriority={true}
              />
            </span>
          </Link>
        </div>
        <h1 className={styles.hdr}>
          <span>SPIRITS</span>
        </h1>
      </div>
      <div className={styles.items}>
        <Cart />
        <ThemeToggle />
      </div>
    </header>
  );
}

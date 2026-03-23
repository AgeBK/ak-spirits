"use client";

import Link from "next/link";
// import Nav from "./nav";
import Img from "./image";
import Cart from "./cart";
import styles from "@/app/css/Header.module.css";
import ThemeToggle from "./toggle";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <Link href="/">
            <Img
              imgSrc={"logos/AK.png"}
              imgAlt="AK spirits"
              imgWidth={80}
              imgHeight={80}
              imgPriority={true}
            />
            <Img
              imgSrc={"logos/AKD.png"}
              imgAlt="AK spirits"
              imgWidth={80}
              imgHeight={80}
              imgPriority={true}
            />
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

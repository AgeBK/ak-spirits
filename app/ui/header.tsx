"use client";

import Link from "next/link";
// import Nav from "./nav";
import Img from "./image";
import ImageThemed from "./image-themed";
import Cart from "./cart";
import styles from "@/app/css/Header.module.css";
import ThemeToggle from "./toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ImageSwitcher from "./image-switcher";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <Link href="/">
            <ImageSwitcher
              img="logos/AK.png"
              img2="logos/AKD.png"
              alt="AK Spirits"
              css="logo"
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

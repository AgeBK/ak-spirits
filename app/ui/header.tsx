"use client";

import Link from "next/link";
// import Nav from "./nav";
import Img from "./image";
import ImageThemed from "./image-themed";
import Cart from "./cart";
import ThemeToggle from "./toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ImageSwitcher from "./image-switcher";
import { SpiritProps } from "../lib/definitions";
import Search from "./search";
import JSXEl from "../lib/DancingScriptElement";
import styles from "@/app/css/Header.module.css";

export default function Header({ data }: SpiritProps[]) {
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
          {/* <div>SPIRITS</div> */}
          <JSXEl text="Your spirits shop" css="logoHdr"></JSXEl>
        </h1>
      </div>
      <div className={styles.search}>
        <Search data={data} />
      </div>
      <div className={styles.items}>
        <Cart />
        <ThemeToggle />
      </div>
    </header>
  );
}

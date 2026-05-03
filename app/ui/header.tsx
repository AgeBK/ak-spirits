"use client";

import { SpiritProps } from "../lib/definitions";
import Link from "next/link";
import Cart from "./cart";
import ThemeToggle from "./toggle";
import ImageSwitcher from "./image-switcher";
import Search from "./search";
import JSXEl from "../lib/DancingScriptElement";
import Menu from "./menu";
import styles from "@/app/css/Header.module.css";

export default function Header({ data }: SpiritProps[]) {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Menu data={data} />
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

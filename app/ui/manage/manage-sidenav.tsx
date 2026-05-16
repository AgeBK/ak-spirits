"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../button";
import styles from "@/app/css/manage/ManageSidneNav.module.css";

export default function ManageSideNav() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      {isShow ? (
        <nav className={styles.sideNav}>
          <ul className={styles.navItems}>
            <li>
              <Button css="closeNav" onClick={() => setIsShow(false)}>
                <span className={styles.close}>X</span>
              </Button>
            </li>
            <li>
              <Link href="/manage/add">Add Product</Link>
            </li>
            <li>
              <Link href="/manage">Sales Data</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <h1>
          <span
            className={styles.burger}
            onClick={() => setIsShow(!isShow)}
            onKeyDown={() => setIsShow(!isShow)}
            role="button"
            tabIndex={0}
          >
            ☰
          </span>
        </h1>
      )}
    </>
  );
}

import React from "react";
import { SpiritProps } from "../lib/definitions";
import styles from "@/app/css/Test.module.css";
import Link from "next/link";

export default function Test({ data }) {
  const spirits = data.map((val: SpiritProps) => val.sub_category);
  const menuItems: string[] = [...new Set(spirits)].sort();

  return (
    <div className={styles.menu}>
      <div className={styles.burger}>
        <div></div>
      </div>
      <div className={styles.nav}>
        <div className={styles.wrapper}>
          <div className={styles.test}>
            <ul>
              {menuItems.map((val: string) => (
                <li className={styles.menuItem} key={val}>
                  <Link href={`/spirts/${val.toLowerCase()}`}>{val}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

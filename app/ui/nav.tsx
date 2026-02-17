import React from "react";
import Cart from "./cart";
import styles from "@/app/css/Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.details}>Nav details</div>
      <Cart />
    </div>
  );
}

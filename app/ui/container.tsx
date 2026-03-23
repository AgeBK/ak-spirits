import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import styles from "@/app/css/Container.module.css";
import { defaultTheme } from "../lib/appData.json";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    // <div className={`${styles.container} ${styles[theme]} theme-light`}>
    // <div className={`${styles.container} theme-light`}>
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

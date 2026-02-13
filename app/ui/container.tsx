import React, { ReactNode } from "react";
import Header from "./header";
import styles from "@/app/css/Container.module.css";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}

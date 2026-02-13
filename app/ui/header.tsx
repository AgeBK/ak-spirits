import Link from "next/link";
import Nav from "./nav";
import Img from "./image";
import styles from "@/app/css/Header.module.css";

export default async function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerRow}>
        <div className={styles.logo}>
          <Link href="/">
            <Img
              imgSrc={"logos/AK.webp"}
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
      <Nav />
    </header>
  );
}

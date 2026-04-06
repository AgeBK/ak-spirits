import Link from "next/link";
import data from "@/app/lib/appData.json";
import ImageSwitcher from "./image-switcher";
import styles from "@/app/css/Footer.module.css";

export default function Footer() {
  const yr = new Date().getFullYear();
  // TODO: height/widths in appData
  return (
    <footer className={styles.container}>
      <div className={styles.ak}>
        © {yr}
        <a
          href="https://github.com/AgeBK/ak-spirits?tab=readme-ov-file#about"
          target="_blank"
        >
          AK Spirits
        </a>
        All rights reserved.
        <div>
          <span className={styles.manage}>
            <Link href="/manage">Manage</Link>
          </span>
        </div>
      </div>
      <div className={styles.payment}>
        <ImageSwitcher
          img="payment/payment2.png"
          img2="payment/payment2D.png"
          alt="AK Spirits"
          css="payment"
        />
      </div>
    </footer>
  );
}

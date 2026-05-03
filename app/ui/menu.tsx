import Link from "next/link";
import { SpiritProps } from "../lib/definitions";
import styles from "@/app/css/Menu.module.css";

export default function Menu({ data }) {
  const spirits = data.map((val: SpiritProps) => val.sub_category);
  const menuItems: string[] = [...new Set(spirits)].sort();
  console.log(menuItems);

  return (
    <div className={styles.burger}>
      <nav>
        <div className={styles.navicon}>
          <div></div>
        </div>
        <ul>
          {menuItems.map((val: string) => (
            <li className={styles.menuItem} key={val}>
              <Link href={`/${val.toLowerCase()}`}>{val}</Link>
            </li>
          ))}
        </ul>

        {/* <div className={styles.wrapper}>
          <div className={styles.test}></div>
        </div> */}
      </nav>
    </div>
  );
}

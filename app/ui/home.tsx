import { DataProps, SpiritProps } from "../lib/definitions";
import Sale3Bot from "./sale6Bot";
import ListItem from "./listItem";
import HomeBanner from "./home-banner";
import styles from "@/app/css/Home.module.css";
import ShopNow from "./shopNow";

export default function Home({ data }: DataProps) {
  // data will be 12 random products on special
  const dataArr1: SpiritProps[] = [];
  const dataArr2: SpiritProps[] = [];

  data.forEach((val, i) => (i % 2 ? dataArr1.push(val) : dataArr2.push(val)));

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <HomeBanner />
      </div>
      <div className={styles.specials}>
        <Sale3Bot data={dataArr1} />
      </div>
      <div className={styles.carousel}>
        <h3 className={styles.other}>Other Great Buys:</h3>
        <ListItem arr={dataArr2} css="similar" />
      </div>
      <div className={styles.showNow}>
        <ShopNow />
      </div>
    </div>
  );
}

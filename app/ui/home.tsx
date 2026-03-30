import Sale3Bot from "./sale6Bot";
import { SpiritProps } from "../lib/definitions";

import styles from "@/app/css/Home.module.css";
import ListItem from "./listItem";

type HomeProps = {
  data: SpiritProps;
};

export default function Home({ data }: HomeProps) {
  const arr1 = data.slice(0, 6);
  const arr2 = data.slice(6);
  // const data2 = data.filter((val, i) => i % 2);
  // console.log(data);
  // console.log(data2);

  return (
    <div className={styles.container}>
      <div className={styles.specials}>
        <Sale3Bot data={arr1} />
      </div>
      <div className={styles.carousel}>
        <h3 className={styles.other}>Other Great Buys:</h3>
        <ListItem arr={arr2} css="similar" />
      </div>
    </div>
  );
}

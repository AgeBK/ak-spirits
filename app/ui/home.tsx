import Sale3Bot from "./sale6Bot";
import { SpiritProps } from "../lib/definitions";
import styles from "@/app/css/Home.module.css";

type HomeProps = {
  data: SpiritProps;
};

export default function Home({ data }: HomeProps) {
  return (
    <div className={styles.container}>
      <Sale3Bot data={data} />
    </div>
  );
}

// import { fetchSpirits } from "../lib/data";
// import { SpiritProps } from "@/app/lib/definitions";
// import Category from "../ui/category";
import styles from "@/app/css/Home.module.css";

export default async function Page() {
  // const data = await getData();
  // const arr : SpiritProps[] = await fetchSpirits();
  return (
    <h1 className={styles.container}>
      <h1 className={styles.hdr}>Home</h1>
      <div>10% off 6 or more bottles, have a range thing</div>
    </h1>
  );
}

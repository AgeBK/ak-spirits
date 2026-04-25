import { ContainerProps } from "../lib/definitions";
import Header from "./header";
import Footer from "./footer";
import styles from "@/app/css/Container.module.css";
import { fetchSpirits } from "../lib/data";

export default async function Container({ children }: ContainerProps) {
  const data = await fetchSpirits();

  return (
    <div className={styles.container}>
      <Header data={data} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

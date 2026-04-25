import { Dancing_Script } from "next/font/google";
import { KeyStringProps } from "./definitions";
import styles from "@/app/css/DancingElement.module.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export default function DSElement({ text, css }: KeyStringProps) {
  return (
    <div className={`${dancingScript.className} ${styles[css]}`}>{text}</div>
  );
}

import Image from "next/image";
import { imgPath } from "@/app/lib/appData.json";
import styles from "@/app/css/ImageFill.module.css";

// Created this because product images are all different sizes (doesn't look good with set height/width)
export default function ImgFill({ src, alt, css, priority }) {
  // const imgPath = "/img/"; // TODO: imgPath in mulitple places

  // console.log(imgPath);
  // console.log(src);

  return (
    <div className={styles[css]}>
      <Image
        src={`${imgPath}${src}`}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority || false}
      />
    </div>
  );
}

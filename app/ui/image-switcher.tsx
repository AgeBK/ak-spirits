import ImgFill from "./image-fill";
import styles from "@/app/css/ImageSwitcher.module.css";

export default function ImageSwitcher({
  img,
  img2,
  alt,
  css,
  priority = false,
}) {
  // using this for light/dark image switches
  return (
    <>
      <span className={styles.lightDisplay}>
        <ImgFill
          src={img}
          alt={alt}
          css={css}
          priority={priority} // priority = max in view onload
        />
      </span>
      <span className={styles.darkDisplay}>
        <ImgFill
          src={img2}
          alt={alt}
          css={css}
          priority={priority} // priority = max in view onload
        />
      </span>
    </>
  );
}

import Image from "next/image";
import { ImgProps } from "../lib/definitions";

export default function Img({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  imgPriority,
}: ImgProps) {
  // main image component used across site
  const imgPath = "/img/";
  return (
    <Image
      src={`${imgPath}${imgSrc}`}
      alt={imgAlt}
      width={imgWidth}
      height={imgHeight}
      priority={imgPriority || false}
    />
  );
}

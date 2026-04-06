import { imgPath } from "@/app/lib/appData.json";
import { ImgProps } from "../lib/definitions";
import Image from "next/image";

export default function Img({
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  imgPriority,
}: ImgProps) {
  // use this for images with set height/width
  // TODO: priority?
  // const imgPath = "/img/";
  return (
    <Image
      src={`${imgPath}${imgSrc}`}
      alt={imgAlt}
      width={imgWidth}
      height={imgHeight}
      // priority={imgPriority || false}
      loading="eager"
    />
  );
}

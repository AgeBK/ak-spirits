import React, { useCallback, useEffect, useState } from "react";
import Button from "./button";
import Img from "./image";
import styles from "@/app/css/ScrollTop.module.css";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const scroll = () => window.scrollTo(0, 0);

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setIsVisible(false);
    } else if (!isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    scroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {isVisible && (
        <Button onClick={scroll} css="scroll">
          <Img
            imgSrc="icons/up.png"
            imgAlt="Back to top"
            imgWidth={30}
            imgHeight={30}
          />
        </Button>
      )}
    </>
  );
}

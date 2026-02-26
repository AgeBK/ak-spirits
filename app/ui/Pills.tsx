import React, { FC } from "react";
import styles from "@/app/css/Pills.module.css";
import Button from "./button";
import Img from "./image";

interface PillsProps {
  filters: Record<string, boolean>;
  setFilters: (filters: Record<string, boolean>) => void;
}

export default function Pills({ filters, setFilters }: PillsProps) {
  console.log("Pills");
  console.log(filters);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    key: string,
  ): void => {
    const { innerText } = e.target;
    console.log(innerText);
    console.log(key);
  };

  const checkValue = (val) => {
    // format price
    
  }

  return (
    <div className={styles.container}>
      {Object.entries(filters).map(
        ([key, value]: [string, boolean], index: number) =>
          value ? (
            <div className={styles.pill} key={index}>
              <Button
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleClick(e, key)
                }
                id={key}
                css="pillDel"
              >
                <span>{String(value)}</span>
                <Img
                  imgSrc={`close2.png`}
                  imgAlt={"close"}
                  imgWidth={22}
                  imgHeight={22}
                />
              </Button>
            </div>
          ) : null,
      )}
    </div>
  );
}

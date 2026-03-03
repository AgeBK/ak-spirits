import { PillsProps } from "../lib/definitions";
import Button from "./button";
import Img from "./image";
import styles from "@/app/css/Pills.module.css";

export default function Pills({ filters, setFilters }: PillsProps) {
  // console.log("Pills");
  // console.log(filters);

  const handleClick = ({ currentTarget: { id } }: { id: string }) => {
    setFilters({ ...filters, [id]: "" });
  };

  return (
    <div className={styles.container}>
      {Object.entries(filters).map(
        ([key, value]: [string, boolean], index: number) =>
          value.toString() ? (
            <div className={styles.pill} key={index}>
              <Button id={key} onClick={handleClick} css="pillDel">
                {key}
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

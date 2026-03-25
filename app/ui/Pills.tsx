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

  console.log("Pills");
  console.log(filters);
  // : [string, boolean], index: number

  const hasValue = (val: string[] | string | number) => {
    let validated = false;
    if (val) {
      if (val === "string" || Array.isArray(val)) {
        validated = Boolean(val.toString());
      } else if (val === "number" && !Number.isNaN(val)) {
        validated = Boolean(0);
      } else if (typeof val === "object" && !Array.isArray(val)) {
        validated = Boolean(Object.keys.length);
      }
    }
    return validated;
  };

  return (
    <div className={styles.container}>
      {Object.entries(filters).map(([key, value], index) =>
        hasValue(value) ? (
          <div className={styles.pill} key={index}>
            <Button id={key} onClick={handleClick} css="pillDel">
              {key} - {value} - {typeof value}
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

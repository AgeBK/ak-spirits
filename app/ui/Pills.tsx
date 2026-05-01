import { PillsProps } from "../lib/definitions";
import Button from "./button";
import Img from "./image";
import styles from "@/app/css/Pills.module.css";

export default function Pills({ filters, setFilters }: PillsProps) {
  const handleClick = ({ currentTarget: { id } }: { id: string }) => {
    setFilters({ ...filters, [id]: "" });
  };

  const checkValue = (val: string[] | string | number) => {
    let validated = false;
    const valType = typeof val;

    if (val) {
      if (valType === "string" || Array.isArray(val)) {
        validated = Boolean(val.toString());
      } else if (valType === "number" && !Number.isNaN(val)) {
        validated = Boolean(0);
      } else if (valType === "object" && !Array.isArray(val)) {
        validated = Boolean(Object.keys.length);
      }
    }
    return validated;
  };

  return (
    <div className={styles.container}>
      {Object.entries(filters).map(([key, value], index) =>
        checkValue(value) ? (
          <div className={styles.pill} key={index}>
            <Button id={key} onClick={handleClick} css="pillDel">
              {/* {key}  */}
              {value}
              <Img
                imgSrc={`close2.png`}
                imgAlt={"close"}
                imgWidth={18}
                imgHeight={18}
              />
            </Button>
          </div>
        ) : null,
      )}
    </div>
  );
}

import { fetchSpirits } from "./data";
import { CategoryProps, SpiritProps } from "./definitions";

export const addToCart = (id, name, price_current) => {
  console.log(id, name, price_current);
};

export const filterData = (arr: SpiritProps[], filter: string) => {
  console.log("filter function");
  arr = arr.filter((val: SpiritProps) => {
    console.log(val.sub_category);
    console.log(val.sub_category === filter);
    return val.sub_category === filter;
  });
  return arr;
};

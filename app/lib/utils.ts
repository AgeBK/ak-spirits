import { fetchSpirits } from "./data";
import { CategoryProps, SpiritProps } from "./definitions";

export const addToCart = (id, name, price_current) => {
  console.log(id, name, price_current);
};

// TODO: tidy filter fn's
export const filterByCat = (arr: SpiritProps[], filter: string) => {
  console.log("filter function");
  arr = arr.filter((val: SpiritProps) => {
    // console.log(val.sub_category);
    // console.log(val.sub_category === filter);
    return val.sub_category === filter;
  });
  return arr;
};

export const filterPrice = (arr: SpiritProps[], filter: number) => {
  console.log("filter Price function");
  console.log(filter);

  arr = arr.filter((val: SpiritProps) => {
    // console.log(val.sub_category);
    // console.log(val.sub_category === filter);
    return val.price_current >= filter[0] && val.price_current <= filter[1];
  });
  return arr;
};

export const filterBrand = (arr: string[], filter: string) => {
  // let filtered: SetStateAction<string[]> = [];
  console.log(arr);

  let filtered: string[] = [];
  if (filter)
    filtered = arr.filter((val) =>
      val.toLowerCase().startsWith(filter.toLowerCase()),
    );
  return filtered;
};

export const filterItemByBrand = (arr: string[], brandArr: string[]) => {
  arr = arr.filter((val) => brandArr.indexOf(val.brand) > -1);
  console.log("filterItemByBrand");
  console.log(arr);
  return arr;
};

export const capitalizeFirstLetter = (val: string) =>
  val.charAt(0).toUpperCase() + val.slice(1);

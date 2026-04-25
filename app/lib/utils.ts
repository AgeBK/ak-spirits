// import { fetchSpirits } from "./data";
import { SpiritProps } from "./definitions";

export const addToCart = (id: string, name: string, price_current: string) => {
  console.log(id, name, price_current);
};

// TODO: tidy filter fn's

export const filterByOffer = (arr: SpiritProps[], filter: string[]) => {
  //
  // console.log("Filter by offer;");
  // console.log(arr);
  // console.log(filter);

  if (filter.length) {
    arr = arr.filter(
      (val) =>
        (val.price_2_for > 0 && filter.includes("Multi Buy")) ||
        (val.price_special === true && filter.includes("Specials")),
    );
  }
  // console.log(arr);
  return arr;
};

export const filterByCat = (arr: SpiritProps[], filter: string) => {
  // console.log("filter function");
  arr = arr.filter((val: SpiritProps) => {
    // console.log(val.sub_category);
    // console.log(val.sub_category === filter);
    return val.sub_category === filter;
  });
  return arr;
};

export const filterByPrice = (arr: SpiritProps[], filter: string) => {
  // console.log("filter Price function");
  // console.log(filter);
  const filterArr = filter.replaceAll("$", "").split(" - ");

  arr = arr.filter((val: SpiritProps) => {
    // console.log(val.sub_category);
    // console.log(val.sub_category === filter);
    return (
      val.price_current >= Number(filterArr[0]) &&
      val.price_current <= Number(filterArr[1])
    );
  });
  return arr;
};

export const filterBrand = (arr: string[], filter: string) => {
  // return list of brand names starting with search term
  // console.log("Filter Brand function:");
  // console.log(arr.sort());

  let filtered: string[] = [];
  // console.log("Filter arg: " + filter);

  if (filter)
    filtered = arr.filter((val) =>
      val.toLowerCase().startsWith(filter.toLowerCase()),
    );
  // console.log("filtered:");
  // console.log(filtered);

  return filtered;
};

export const filterByBrand = (arr: SpiritProps[], brand: string) => {
  // TODO: check this fn and above
  // return items starting with search term
  // console.log("Filter BY Brand function (return item):");
  // console.log(arr);
  arr = arr.filter((val) =>
    val.brand.toLowerCase().startsWith(brand.toLowerCase()),
  );
  return arr;
};

export const filterBySearch = (arr: SpiritProps[], filter: string) => {
  // console.log("filter Search function");
  arr = arr.filter(
    ({ name, brand }) =>
      name.toLowerCase().indexOf(filter) > -1 ||
      brand.toLowerCase().indexOf(filter) > -1,
  );
  return arr;
};

export const capitalizeFirstLetter = (val: string) =>
  val.charAt(0).toUpperCase() + val.slice(1);

export const formatCurrency = (amount: number) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const hyphenateSpace = (str: string) => str.replace(" ", "-");

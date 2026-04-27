import { Dispatch, ReactNode, SetStateAction } from "react";

export type SpiritProps = {
  brand: string;
  category: string;
  id: string;
  name: string;
  packaging: string;
  price_2_for: number;
  price_current: number;
  price_normal: number;
  ratings_avg: number;
  ratings_tot: number;
  short_name: string;
  sub_category: string;
  unit: string;
  volume: number;
  price_special: boolean;
};

export interface DataProps extends SpiritProps {
  data: SpiritProps[];
}

export type ContainerProps = {
  children: ReactNode;
};

export type ImgProps = {
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  imgPriority?: boolean;
};

export type CategoryProps = {
  data: SpiritProps;
  similarArr?: SpiritProps[];
};

export type FilterStateProps = {
  offer: string[];
  category: string;
  brand: string;
  price: string;
  // search: string;
};

export type FilterProps = {
  //arr?: SpiritProps[];
  setFilters: Dispatch<
    SetStateAction<{
      // arr: string[];
      offer: string[];
      category: string;
      brand: string;
      price: number;
    }>
  >; // Dispatch<SetStateAction<{ category: string; brand: string; price: string; }>>'
  filters: {
    // arr: string[];
    offer: string[];
    category: string;
    brand: string;
    price: number;
  };
};

export interface FilterArrProps extends FilterProps {
  arr: SpiritProps[];
}

export type CartProps = {
  arr: SpiritProps;
  brand: string;
  category: string;
  id: string;
  price_2_for: number;
  price_current: number;
  qty: number;
  short_name: string;
  sub_category: string;
};

// export type ButtonProps = {
//   children?: ReactNode;
//   onClick: () => void;
//   css?: string;
//   disabled?: boolean;
//   type?: "button" | "submit" | "reset";
// };

export type ButtonProps = {
  children?: ReactNode;
  onClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
  id?: string;
  css?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

export type ProductItemProps = {
  arr: CategoryProps[];
  css: string;
};

export interface ListItemProps {
  arr: Array<{
    id: string;
    brand: string;
    name: string;
    short_name: string;
    category: string;
    sub_category: string;
    price_normal: number;
    price_current: number;
    price_2_for: number;
    volume?: number;
    unit?: string;
    ratings_avg?: number;
    ratings_tot?: number;
    packaging?: string;
    price_special?: boolean;
  }>;
  css: string;
  hdr?: string;
}

export type PillsProps = {
  filters: {
    // arr: string[];
    category: string;
    brand: string;
    price: number;
  };
  setFilters: Dispatch<SetStateAction<FilterStateProps>>;
  // arr: string[];
  // category: string;
  // brand: string;
  // price: string;
};

export type distinctBrandsProps = {
  brands: string[];
  items: SpiritProps[];
};

export type accBrandProps = { brands: string[]; items: SpiritProps[] };

export type KeyStringProps = { [key: string]: string };

export type StringPair = [string, string];

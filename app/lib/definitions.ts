import { ReactNode } from "react";

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
};

export type ImgProps = {
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  imgPriority?: boolean;
};

export type CategoryProps = {
  arr: SpiritProps[];
};

export type FilterTypeProps = {
  arr: SpiritProps[];
  setFilterCategory: (value: string) => void;
  filterCategory: string;
};

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

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  css?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

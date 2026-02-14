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
  setFilterCategory: (value: string) => void;
};

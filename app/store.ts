import { create } from "zustand";
import { SpiritProps, CartProps } from "./lib/definitions";

const checkCartExisting = (
  arr: CartProps[],
  item: CartProps,
  itemQty: number,
): CartProps[] => {
  const itemExists = arr.find((val: CartProps) => val.id === item.id);
  if (itemExists) {
    itemExists.qty += itemQty;
  } else {
    item.qty = itemQty;
    arr.push(item);
  }
  return arr;
};

export const useCartStore = create<{
  cartItems: CartProps[];
  addCartItem: (arr: CartProps, qty?: number) => void;
  removeItem: (itemId: string) => void;
  deleteItem: (itemId: string) => void;
  clearCart: () => void;
  total: () => number;
}>((set, get) => ({
  cartItems: [],
  addCartItem: (item: CartProps, qty = 1) => {
    console.log(qty);

    set((state) => ({
      cartItems: checkCartExisting(state.cartItems, item, qty),
    }));
  },
  removeItem: (itemId: string) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) => {
        if (item.id === itemId) {
          item.qty--;
        }
        return item;
      }),
    })),
  deleteItem: (itemId: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),
  clearCart: () => set({ cartItems: [] }),
  total: (): number => {
    return get().cartItems.reduce(
      (total, product) => total + product.price_current * product.qty,
      0,
    );
  },
}));

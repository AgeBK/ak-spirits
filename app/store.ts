import { create } from "zustand";
import { SpiritProps, CartProps } from "./lib/definitions";
console.log("store");

// checkCartExisting(state.cartItems, item.id);

const checkCartExisting = (arr: CartProps[], item: CartProps) => {
  const itemExists = arr.find((val: CartProps) => val.id === item.id);

  if (itemExists) {
    itemExists.qty += 1;
  } else {
    item.qty = 1;
    arr.push(item);
  }
  console.log(arr);
  return arr;
};

export const useCartStore = create((set) => ({
  cartItems: [], // TODO: how to add types??
  addCartItem: (item: CartProps) => {
    set((state: { cartItems: CartProps[] }) => ({
      cartItems: checkCartExisting(state.cartItems, item),
    }));
  },
  removeItem: (itemId: string) =>
    set((state: { cartItems: CartProps[] }) => ({
      cartItems: state.cartItems.filter(
        (item: CartProps) => item.id !== itemId,
      ),
    })),
  clearCart: () => set({ cartItems: [] }),
  total: 0,
  // updateTotal: () =>
  //   set((state) => ({
  //     total: state.cartItems.reduce((sum, item) => sum + item.price, 0),
  //   })),
}));

import { create } from "zustand";
import { SpiritProps, CartProps } from "./lib/definitions";
console.log("store");

// checkCartExisting(state.cartItems, item.id);

const checkCartExisting = (arr: CartProps[], item: CartProps) => {
  const exists = arr.find((val: CartProps) => val.id === item.id);

  if (exists) {
    // item already exists in cart, increase qty
    exists.qty += 1;
  } else {
    // add new item to cart
    item.qty = 1;
    arr.push(item);
  }
  console.log(arr);
  return arr;
};

export const useCartStore = create((set) => ({
  cartItems: [],
  addCartItem: (item) => {
    console.log("Add Item:");
    set((state) => ({ cartItems: checkCartExisting(state.cartItems, item) }));
  },
  removeItem: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),
  bears: 0,
  count: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  clearCart: () => set({ cartItems: [] }),
  total: 0,
  updateTotal: () =>
    set((state) => ({
      total: state.cartItems.reduce((sum, item) => sum + item.price, 0),
    })),
}));

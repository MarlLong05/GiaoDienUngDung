import { atom, selector } from "recoil";
import { getTotal } from "../state/cart";

export const cartState = atom({
  key: "cartState",
  default: []
});

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cart = get(cartState);
    return getTotal(cart);
  }
});
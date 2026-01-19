import type { ProductCart } from "../../models/ProductCartType";
import { createHtmlCheckout } from "./checkout";

export const removeAllFromCart = (product: ProductCart) => {
  let shoppingBag: ProductCart[] = [];
  shoppingBag = shoppingBag.filter((p) => p.id !== product.id);
  localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));
  createHtmlCheckout();
};

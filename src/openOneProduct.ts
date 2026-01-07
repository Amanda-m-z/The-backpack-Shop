import type { Backpack } from "./Backpack";

export const openOneProduct = (item: Backpack) => {
     console.log(item.color);
     console.log(item.name);
     console.log(item.type);
     console.log(item.purchases);
     window.location.href = "oneproduct.html";
}
import type { Backpack } from "../Backpack type/Backpack";
import { createCart } from "./createCart";

export const addToCart = (theNewBag: Backpack) => {
     
    let shoppingBag: Backpack[] = [];

    const theCartString = localStorage.getItem("ShoppingBag")
    if (theCartString) {
        shoppingBag = JSON.parse(theCartString);
    }

   const existingItem = shoppingBag.find(item => item.id === theNewBag.id)

   if (existingItem){
        console.log("Varan finns redan i varukorgen!");
        existingItem.quantity++;
   }
   else {
    console.log("Varan finns inte än!");
    shoppingBag.push(theNewBag);
   }
    localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));
    createCart();
}
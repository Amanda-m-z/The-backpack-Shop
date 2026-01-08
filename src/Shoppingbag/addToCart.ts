import type { Backpack } from "../Backpack type/Backpack";
import { createCart } from "./createCart";

export const addToCart = (theNewBag: Backpack) => {
     
    let shoppingBag: Backpack[] = [];

    const theCartString = localStorage.getItem("ShoppingBag")
    if (theCartString) {
        shoppingBag = JSON.parse(theCartString);
    }

   const id = theNewBag.id;

   if(shoppingBag.find(item => item.id === id)) {
    console.log("Varan finns redan" + theNewBag.quantity);
        shoppingBag = shoppingBag.filter(item => item.id !== id);
        theNewBag.quantity++;
        shoppingBag.push(theNewBag);
        localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));
        console.log(theNewBag.quantity);
        createCart();
   }
   else {
    console.log("Varan finns inte än!");
          shoppingBag.push(theNewBag);
        localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));
   }
}
import type { Backpack } from "../Backpack type/Backpack";
import { createCart } from "./createCart";

export const removeFromCart = (theNewBag: Backpack) => {
     
    let shoppingBag: Backpack[] = [];

    const theCartString = localStorage.getItem("ShoppingBag")
    if (theCartString) {
        shoppingBag = JSON.parse(theCartString);
    }

   const existingItem = shoppingBag.find(item => item.id === theNewBag.id)
   if (existingItem && existingItem.quantity > 1 ){
    console.log("Du tar bort en vara");
    existingItem.quantity--;
   }
   else {
     console.log("Varutypen tas bort från listan")
      shoppingBag = shoppingBag.filter(item => item.id !== theNewBag.id);
   }



   
 
   
    localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));
    createCart();
}




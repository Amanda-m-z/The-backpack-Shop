import type { Backpack } from "../Backpack type/Backpack";
import { createCart } from "./createCart";

export const removeFromCart = (theNewBag: Backpack) => {
     
    let shoppingBag: Backpack[] = [];

    const theCartString = localStorage.getItem("ShoppingBag")
    if (theCartString) {
        shoppingBag = JSON.parse(theCartString);
    }

   const id = theNewBag.id;

  
    if (theNewBag.quantity === 1){                      //Om varans quanitiy värde redan är 1
    console.log("Det fanns bara en produkt kvar!");              
        shoppingBag = shoppingBag.filter(item => item.id !== id); //Ta bort det värdet
        localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag)); //Ny lista
        createCart();
    }
  
   if(shoppingBag.find(item => item.id === id)) {  //Om varan redan finns
    console.log("Varan finns redan" + theNewBag.quantity);
        shoppingBag = shoppingBag.filter(item => item.id !== id);  //Ta bort varan
        theNewBag.quantity--;                                      //Minska med en quantity
        shoppingBag.push(theNewBag);                               //pusha det nya värdet till listan
        localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));  //Lägg den nya listan i localstorage
        console.log(theNewBag.quantity);  
        createCart();                                                  //Uppdatera listan
   }

}
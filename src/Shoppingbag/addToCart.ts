import type { Backpack } from "../Backpack type/Backpack";
import type { ItemCart } from "../Backpack type/itemCart";
import { createCart } from "./createCart";

export const addToCart = (theNewBag: Backpack) => {  //Denna fuktion lägger till ett produkt i kundkorgen
     
    let shoppingBag: ItemCart [] = [];

    const theCartString = localStorage.getItem("ShoppingBag")
    if (theCartString) {
        shoppingBag = JSON.parse(theCartString);
    }

   const existingItem = shoppingBag.find(item => item.id === theNewBag.id) //Dett hittar produkten som redan finns i listan

   if (existingItem){                 //Om varan finns så ökas antalet med 1
        existingItem.quantity++;
   }
   else {
    const newItemBag: ItemCart = {
        id: theNewBag.id, 
        name: theNewBag.name, 
        price: theNewBag.price,
        img: theNewBag.img, 
        purchases:theNewBag.purchases,
        type: theNewBag.type,
        color: theNewBag.color,
        quantity: 1

    }
   shoppingBag.push(newItemBag);     //Om varan inte finns så läggs det till i kundkoren
   }
   
    localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag)); //Lagrar ändringen i localstorage
    createCart(); //Uppdatera cart
}
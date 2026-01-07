import type { Backpack } from "../Backpack type/Backpack";

export let shoppingBag: Backpack[] = [];



export const addToCart = (theNewBag: Backpack) => {

    shoppingBag.push(theNewBag);
    localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));
    
}

export const createCart = () => {
    const theCart = document.getElementById("shoppingBag");
    if (theCart){
        theCart.className = "showCart";
    }

    shoppingBag = document.getElementById("theItems");

  
}




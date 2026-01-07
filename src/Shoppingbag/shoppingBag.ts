import type { Backpack } from "../Backpack type/Backpack";

export const shoppingBag: Backpack[] = [];



export const addToCart = (theNewBag: Backpack) => {

    shoppingBag.push(theNewBag);
    localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));

}



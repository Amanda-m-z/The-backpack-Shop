import { allProducts } from "../Backpack type/allProducts";
import type { Backpack } from "../Backpack type/Backpack";
import { shoppingBag } from "./shoppingBag";

export const createCart = () => {
    const theCart = document.getElementById("shoppingBag");
    if (theCart){
        theCart.className = "showCart";
    }

    const theCartItems = document.getElementById("theItems");

  
}
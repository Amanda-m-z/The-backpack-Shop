import type { Backpack } from "./Backpack type/Backpack";
import { createHTMLGeneral } from "./createHtmlGeneral";
import { openOneProduct } from "./OneProduct/openOneProduct";
import { addToCart } from "./Shoppingbag/addToCart";


export const createHTML = (allProducts: Backpack[]) => {  //Detta är för shop Main 

    const productsDiv = document.getElementById("products-grid");
    if (productsDiv) {
        productsDiv.innerHTML = "";
    }

    allProducts.forEach((item, i) => {


    const productContainer = createHTMLGeneral(item);
    const buttonBuy = document.createElement("button");

    productContainer.className = "productContainer";

    buttonBuy.innerHTML = "BUY"
    buttonBuy.className = "buttonBuy";


    buttonBuy.addEventListener("click", () => {
    addToCart(allProducts[i]);
    });


    document.getElementById("imgContainerID")?.addEventListener("click", () => {
       openOneProduct(item);
    });

    document.getElementById("nameID")?.addEventListener("click", () => {
       openOneProduct(item);
    });
    
    document.getElementById("extraInfoId")?.appendChild(buttonBuy); 

    productsDiv?.appendChild(productContainer);
    
    });

}
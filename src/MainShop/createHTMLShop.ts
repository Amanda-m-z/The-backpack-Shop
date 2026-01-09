import type { Backpack } from "../Backpack type/Backpack";
import { createButtonBUY } from "../createButtonBUY";
import { createHTMLGeneral } from "../createHtmlGeneral";
import { openOneProduct } from "../OneProduct/openOneProduct";
import { addToCart } from "../Shoppingbag/addToCart";


export const createHTML = (allProducts: Backpack[]) => {  //Detta är för shop Main 

    const productsDiv = document.getElementById("products-grid");
    if (productsDiv) {
        productsDiv.innerHTML = "";
    }

    allProducts.forEach((item, i) => {


    //const productContainer = createHTMLGeneral(item);
    //const shopButton = createButtonBUY();

    const productContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const extraInfo = document.createElement("div");
    const name = document.createElement("h2");
    const price = document.createElement("p");

    productContainer.className = "productContainer";
    imgContainer.className = "imgContainer";
    imgContainer.id = "imgContainerID";
    img.src = item.img;
    extraInfo.className = "extraInfo"
    name.innerHTML = item.name;
    price.innerHTML = item.price+"kr";

    const buttonBuy = document.createElement("button");   
    buttonBuy.innerHTML = "BUY"
    buttonBuy.className = "buttonBuy";




   buttonBuy.addEventListener("click", () => {
    addToCart(allProducts[i]);
    });

   imgContainer.addEventListener("click", () => {
     openOneProduct(item);
    });

    name.addEventListener("click", () => {
       openOneProduct(item);
    });

    
    imgContainer.appendChild(img);
    productContainer.appendChild(imgContainer);
    extraInfo.appendChild(name);
    extraInfo.appendChild(price);
    productContainer.appendChild(extraInfo);
    productsDiv?.appendChild(productContainer);
    
    });

};
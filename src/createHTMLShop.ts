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


    
    const productContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const extraInfo = document.createElement("div");
    const name = document.createElement("h2");
    const price = document.createElement("p");
    const buttonBuy = document.createElement("button");

    productContainer.className = "productContainer";
    imgContainer.className = "imgContainer";
    img.src = item.img;
    extraInfo.className = "extraInfo"
    name.innerHTML = item.name;
    price.innerHTML = item.price+"kr";
    
    buttonBuy.innerHTML = "BUY"
    buttonBuy.className = "buttonBuy";

    const theDiv = createHTMLGeneral(item);

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
    
    extraInfo.appendChild(buttonBuy); 

    productsDiv?.appendChild(productContainer);
    
    });

}
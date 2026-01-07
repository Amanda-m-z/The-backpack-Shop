import type { Backpack } from "./Backpack";
import { openOneProduct } from "./openOneProduct";

export const createHTML = (allProducts: Backpack[]) => {

    const productsDiv = document.getElementById("products-grid");
    if (productsDiv) {
        productsDiv.innerHTML = "";
    }

    allProducts.forEach((item) => {

    const productContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const extraInfo = document.createElement("div");
    const name = document.createElement("h2");
    const price = document.createElement("p");
    const buttonBuy = document.createElement("button");

    extraInfo.className = "extraInfo"
    img.src = item.img;
    name.innerHTML = item.name;
    price.innerHTML = item.price+"kr";
    productContainer.className = "productContainer";
    imgContainer.className = "imgContainer";
    buttonBuy.innerHTML = "BUY"
    buttonBuy.className = "buttonBuy";

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
    extraInfo.appendChild(buttonBuy);
    productContainer.appendChild(extraInfo);
    productsDiv?.appendChild(productContainer);
    
    });

}
import type { Backpack } from "../Backpack type/Backpack";
import { addToCart } from "../Shoppingbag/addToCart";


export const createHTMLOneProduct = () => {
    
    const oneProductView = document.getElementById("oneProductView");
    
    if (oneProductView) {
        oneProductView.innerHTML = "";
    }

    let oneBag:Backpack = JSON.parse(localStorage.getItem("TheBag") || '""');
 
    const productContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const extraInfo = document.createElement("div");
    const name = document.createElement("h2");
    const price = document.createElement("p");
    const color = document.createElement("p");
    const buttonBuy = document.createElement("button");

    img.src = oneBag.img;
    imgContainer.className = "oneProductImg";
    extraInfo.className = "sideInfo";
    name.innerHTML = oneBag.name;
    price.innerHTML = oneBag.price + "kr"
    color.innerHTML = "Color: " + oneBag.color;
    buttonBuy.innerHTML = "Lägg i varukorgen"

    imgContainer.appendChild(img);
    productContainer.appendChild(imgContainer);
    extraInfo.appendChild(name);
    extraInfo.appendChild(price);
    extraInfo.appendChild(color);
    extraInfo.appendChild(buttonBuy);
    productContainer.appendChild(extraInfo);
    oneProductView?.appendChild(productContainer);
    
    buttonBuy.addEventListener("click", () => {
    addToCart(oneBag);
    });

}
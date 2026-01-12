
import type { Product } from "./Backpack/ProductType";
import { openOneProduct } from "./OneProduct/openOneProduct";

export const createHTMLGeneral = (item: Product) => {  //Skapar Basic HTML

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
    name.id = ("nameID");
    price.innerHTML = item.price+"kr";


    imgContainer.appendChild(img);
    productContainer.appendChild(imgContainer);
    extraInfo.appendChild(name);
    extraInfo.appendChild(price);
    productContainer.appendChild(extraInfo);

    
    imgContainer.addEventListener("click", () => {
     openOneProduct(item);
    });

    return productContainer;
    
}
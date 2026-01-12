import type { Product } from "./Backpack/ProductType";
import { openOneProduct } from "./OneProduct/openOneProduct";

export const createHtmlProductInCart = (item: Product) => {
  //Skapar Basic HTML

  const productContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const productInfo = document.createElement("div");
  const name = document.createElement("h2");
  const price = document.createElement("p");

  productContainer.className = "productContainer";
  imgContainer.className = "imgContainer";
  imgContainer.id = "imgContainerID";
  img.src = item.img;
  productInfo.className = "productInfo";
  name.innerHTML = item.name;
  name.id = "nameID";
  price.innerHTML = item.price + " kr";
  price.className = "pricetag";

  imgContainer.appendChild(img);
  productContainer.appendChild(imgContainer);

  productInfo.appendChild(name);
  productInfo.appendChild(price);

  productContainer.appendChild(productInfo);

  imgContainer.addEventListener("click", () => {
    openOneProduct(item);
  });

  return productContainer;
};

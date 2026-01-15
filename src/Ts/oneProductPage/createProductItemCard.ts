import type { Product } from "../../BackpackType/ProductType";
import { addToCart } from "../../Shoppingbag/addToCart";

export function createProductItemCard(
  product: Product,
  similarProductsContainer: HTMLElement
) {
  const productContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const extraInfo = document.createElement("div");
  const name = document.createElement("h4");
  const price = document.createElement("h5");

  productContainer.className = "productContainer";
  imgContainer.className = "imgContainer";
  img.src = product.img;
  extraInfo.className = "extraInfo";
  name.innerHTML = product.name;
  price.innerHTML = product.price + " kr";

  const buttonBuy = document.createElement("button");
  buttonBuy.innerHTML = "KÖP";
  buttonBuy.className = "btn btn-primary";

  buttonBuy.addEventListener("click", () => {
    //Om du klickar buy så läggs backPack i kundkorg
    addToCart(product);
  });

  imgContainer.addEventListener("click", () => {
    //openOneProduct(product);
    const theBag = JSON.stringify(product); //Gör till string
    localStorage.setItem("TheBag", theBag); //Spara i localStorage
    window.location.href = "src/pages/oneproduct.html"; //Öppna oneproduct sida
  });

  extraInfo.append(name, price, buttonBuy);
  imgContainer.appendChild(img);
  productContainer.append(imgContainer, extraInfo);
  similarProductsContainer?.appendChild(productContainer);
}

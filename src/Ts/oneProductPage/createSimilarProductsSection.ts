import type { Product } from "../../BackpackType/ProductType";
import { getProduct } from "../../getProduct";
import { addToCart } from "../../Shoppingbag/addToCart";

export async function createSimilarProductsSection(category: string) {
  const similarProductsContainer = document.getElementById(
    "similarProductsContainer"
  );

  if (similarProductsContainer) {
    similarProductsContainer.innerHTML = "";
  }

  // Get all the products in the product array
  const theProducts: Product[] = await getProduct();

  // Filter products that have similar categories and limit it to show only 4 products
  const similarCategory = theProducts
    .filter((product) => product.type === category)
    .slice(0, 4);

  console.log(similarCategory);

  similarCategory.forEach((product) => {
    const productContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const extraInfo = document.createElement("div");
    const name = document.createElement("h4");
    const price = document.createElement("h5");

    productContainer.className = "productContainer";
    imgContainer.className = "imgContainer";
    imgContainer.id = "imgContainerID";
    img.src = product.img;
    extraInfo.className = "extraInfo";
    name.innerHTML = product.name;
    name.id = "nameID";
    price.innerHTML = product.price + "kr";

    const buttonBuy = document.createElement("button");
    buttonBuy.innerHTML = "KÖP";
    buttonBuy.className = "buyButton";

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

    imgContainer.appendChild(img);
    productContainer.appendChild(imgContainer);
    extraInfo.appendChild(name);
    extraInfo.appendChild(price);
    productContainer.appendChild(extraInfo);
    extraInfo.appendChild(buttonBuy);
    similarProductsContainer?.appendChild(productContainer);
  });

  //   const html = createHTML(theProducts);

  //   similarProductsContainer?.append(html);
}

import type { Product } from "./Backpack/ProductType";
import { openOneProduct } from "./OneProduct/openOneProduct";

export const createHTMLGeneral = (item: Product) => {
  //Skapar Basic HTML

  const productContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const extraInfo = document.createElement("div");
  const name = document.createElement("h2");
  const price = document.createElement("p");
  const reviewsContainer = document.createElement("div");
  const starsContainer = document.createElement("div");
  const firstStar = document.createElement("i");
  const secondStar = document.createElement("i");
  const thirdStar = document.createElement("i");
  const fourthStar = document.createElement("i");
  const fifthStar = document.createElement("i");
  const reviewDetailsContainer = document.createElement("div");
  const reviewRating = document.createElement("p");

  const inStockStatus = document.createElement("div");
  const circleStatusIcon = document.createElement("div");
  const inStockText = document.createElement("p");

  const shippingOverview = document.createElement("div");
  const freeShippingContainer = document.createElement("div");
  const freeShippingIcon = document.createElement("i");
  const freeShippingText = document.createElement("p");
  const freeReturnContainer = document.createElement("div");
  const freeReturnIcon = document.createElement("i");
  const freeReturnText = document.createElement("p");
  const workDayContainer = document.createElement("div");
  const workDayIcon = document.createElement("i");
  const workDayText = document.createElement("p");

  productContainer.className = "productContainer";
  imgContainer.className = "imgContainer";
  imgContainer.id = "imgContainerID";
  img.src = item.img;
  extraInfo.className = "productInfo";
  name.innerHTML = item.name;
  name.id = "nameID";
  price.innerHTML = item.price + " kr";
  price.className = "pricetag";

  reviewsContainer.className = "reviewsContainer";

  starsContainer.className = "starsContainer";
  firstStar.className = "fa-solid fa-star";
  secondStar.className = "fa-solid fa-star";
  thirdStar.className = "fa-solid fa-star";
  fourthStar.className = "fa-solid fa-star";
  fifthStar.className = "fa-regular fa-star";

  reviewDetailsContainer.className = "reviewDetailsContainer";
  reviewRating.textContent = "4.0 (28)";

  inStockStatus.className = "inStockStatus";
  circleStatusIcon.className = "circleStatusIcon";
  inStockText.textContent = "Finns i lager";

  shippingOverview.className = "shippingOverview";
  freeShippingIcon.className = "fa-solid fa-truck-fast";
  freeShippingText.textContent = "Fri frakt på beställningar över 599 kr";
  freeReturnIcon.className = "fa-solid fa-truck-arrow-right";
  freeReturnText.textContent = "Gratis returer i hela Sverige";
  workDayIcon.className = "fa-solid fa-calendar";
  workDayText.textContent = "4-6 arbetsdagars leveranstid";

  imgContainer.appendChild(img);
  productContainer.appendChild(imgContainer);
  shippingOverview.appendChild(freeShippingContainer);
  freeShippingContainer.appendChild(freeShippingIcon);
  freeShippingContainer.appendChild(freeShippingText);

  shippingOverview.appendChild(freeReturnContainer);
  freeReturnContainer.appendChild(freeReturnIcon);
  freeReturnContainer.appendChild(freeReturnText);
  shippingOverview.appendChild(workDayContainer);
  workDayContainer.appendChild(workDayIcon);
  workDayContainer.appendChild(workDayText);

  extraInfo.appendChild(name);
  extraInfo.appendChild(price);
  extraInfo.appendChild(reviewsContainer);
  extraInfo.appendChild(inStockStatus);
  extraInfo.appendChild(shippingOverview);

  reviewsContainer.appendChild(starsContainer);
  reviewsContainer.appendChild(reviewDetailsContainer);

  starsContainer.appendChild(firstStar);
  starsContainer.appendChild(secondStar);
  starsContainer.appendChild(thirdStar);
  starsContainer.appendChild(fourthStar);
  starsContainer.appendChild(fifthStar);

  inStockStatus.appendChild(circleStatusIcon);
  inStockStatus.appendChild(inStockText);

  reviewDetailsContainer.appendChild(reviewRating);

  productContainer.appendChild(extraInfo);

  imgContainer.addEventListener("click", () => {
    openOneProduct(item);
  });

  return productContainer;
};

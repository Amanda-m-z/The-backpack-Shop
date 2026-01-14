import type { Product } from "../../Backpack/ProductType";
import { createButtonBUY } from "../../createButtonBUY";
import { openOneProduct } from "../../OneProduct/openOneProduct";
import { addToCart } from "../../Shoppingbag/addToCart";
import { createProductDetailsAccordion } from "./createProductDetailsAccordion";

export const createHTMLOneProductPage = (item: Product) => {
  //Skapar Basic HTML

  const productContainer = document.createElement("div");

  const imgContainer = document.createElement("div");
  const img = document.createElement("img");

  const productInfo = document.createElement("div");
  const name = document.createElement("h1");
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

  const buttonBuy = createButtonBUY(); //Skapar buyButton och lagar i buttonBuy
  buttonBuy.innerHTML = "Lägg till varukorgen";
  buttonBuy.addEventListener("click", () => {
    //Om du klickar buy så läggs backPack i kundkorg
    addToCart(item);
  });

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

  const accordion = document.createElement("div");
  const accordionDetails = [
    {
      category: "Produktbeskrivning",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec ligula placerat, congue neque vel, dignissim arcu. Donec nec dictum est. Donec venenatis turpis sapien, at facilisis enim ultricies ac. Sed pellentesque interdum nibh, non lobortis urna mollis eu. Nam vel bibendum tellus, a laoreet dui. Integer metus ante, volutpat in nulla eu, cursus porta ex. Pellentesque eu interdum est. Morbi a leo et lorem fringilla lobortis et vitae turpis.",
    },
    {
      category: "Material",
      text: "<bold>Material:<bold> 65% polyester (återvunnen), 35% bomull (ekologisk)",
    },
    { category: "Tekniska detaljer", text: "Lorem ipsum" },
    { category: "Leverans och returer", text: "Lorem ipsum" },
    { category: "Recensioner", text: "Lorem ipsum" },
  ];
  createProductDetailsAccordion(accordionDetails, accordion);

  const similarProductsContainer = document.createElement("div");
  similarProductsContainer.id = "similarProductsContainer";
  const similarProductsHeading = document.createElement("h2");
  similarProductsHeading.textContent = "Liknande produkter";

  productContainer.className = "productContainer";
  imgContainer.className = "imgContainer";
  imgContainer.id = "imgContainerID";
  img.src = item.img;
  productInfo.className = "productInfo";
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

  shippingOverview.appendChild(freeShippingContainer);
  freeShippingContainer.appendChild(freeShippingIcon);
  freeShippingContainer.appendChild(freeShippingText);

  shippingOverview.appendChild(freeReturnContainer);
  freeReturnContainer.appendChild(freeReturnIcon);
  freeReturnContainer.appendChild(freeReturnText);

  shippingOverview.appendChild(workDayContainer);
  workDayContainer.appendChild(workDayIcon);
  workDayContainer.appendChild(workDayText);

  productInfo.appendChild(name);
  productInfo.appendChild(price);
  productInfo.appendChild(reviewsContainer);
  productInfo.appendChild(inStockStatus);
  productInfo.appendChild(buttonBuy);
  productInfo.appendChild(shippingOverview);
  productInfo.appendChild(accordion);

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

  similarProductsContainer.appendChild(similarProductsHeading);

  productContainer.appendChild(imgContainer);
  productContainer.appendChild(productInfo);
  productContainer.appendChild(similarProductsContainer);

  // imgContainer.addEventListener("click", () => {
  //   openOneProduct(item);
  // });

  return productContainer;
};

export const loadProductCard = () => {
  const productCard = document.getElementById("product-card");

  const titleCardContainer = productCard?.getElementsByClassName("product-info-title");
  const descriptionCardContainer = productCard?.getElementsByClassName("product-info-description" );
  const buttonCard = productCard?.getElementsByClassName("product-card-btn");

 
  // Title
  const productTitle = document.createElement("h3");
  productTitle.textContent = "Minst 25 % på Laptopryggsäckar";

  // Description
  const productDescription = document.createElement("p");
  productDescription.textContent =
    "Förbered inför terminsstarten med en ny ryggsäck som tryggt kan förvara din laptop, anteckningsblock och vattenflaska.";

  // Button
  const productButton = document.createElement("button");
  productButton.textContent = "SE LAPTOPRYGGSÄCKAR";

  // Knapptext och click-event
  buttonCard?.[0]?.addEventListener("click", () => {
    window.location.href = "/products.html";
  });

  // Append elements to the card container
  titleCardContainer?.[0]?.appendChild(productTitle);
  descriptionCardContainer?.[0]?.appendChild(productDescription);
};
 

document.addEventListener("DOMContentLoaded", loadProductCard);

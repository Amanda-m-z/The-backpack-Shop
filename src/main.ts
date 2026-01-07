import { loadHeader } from "./Ts/loadHeader";
import { loadProductCard } from "./Ts/product_highlight_card";  
import "./scss/style.scss";
const heroButton = document.getElementById("heroCta");

heroButton?.addEventListener("click", () => {
  window.location.href = "/oneproduct.html";
});

// Load main header
const header = document.getElementById("headerContainer");

if (header) {
  loadHeader();
} else {
  console.error("Header element with the id 'headerContainer' not found");
}

// Load Product Card
document.addEventListener("DOMContentLoaded", () => {
  loadProductCard();
});
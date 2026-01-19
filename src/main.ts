import { createCart } from "./Cart/createCart";
import { createHtmlCheckout } from "./pages/checkout/checkout";
import { loadFooter } from "./Ts/layout/loadFooter";

import { loadNewsletter } from "./pages/home/newsletter";
import { loadProductCard } from "./pages/home/product_highlight_card";

import "./scss/style.scss";
import { loadHeader } from "./Ts/layout/loadHeader";
import { loopPopular } from "./pages/home/loopPopular";
import { loopNew } from "./pages/home/loopNew";

const heroButton = document.getElementById("heroCta");

heroButton?.addEventListener("click", () => {
  window.location.href = "../shop.html";
});

// Load main header
const header = document.getElementById("headerContainer");

if (header) {
  loadHeader();
  //allBackpackslink to shop starts here
  const allBackpacksLink = document.getElementById("allBackpacksLink");

  allBackpacksLink?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/shop.html";
  });
  //allBackpackslink to shop ends here
} else {
  console.error("Header element with the id 'headerContainer' not found");
}

// Load Product Card
document.addEventListener("DOMContentLoaded", () => {
  loadProductCard();
});

// Load footer
const footer = document.getElementById("footer");
if (footer) {
  loadFooter();
} else {
  console.error("Footer element with the id 'Footer' not found");
}

//Newsletter
const newsletter = document.getElementById("newsletter");

if (newsletter) {
  loadNewsletter();
} else {
  console.error("div element with the id 'newsletter' not found");
}

loopPopular();
loopNew();

// cartIcon 
const theIconCart = document.getElementById("theCartIcon");
theIconCart?.addEventListener("click", createCart);

//Checkout starts here
const checkout = document.getElementById("temp");

checkout?.addEventListener("click", () => {
  window.location.href = "../checkout.html";
});

const checkoutHtml = document.getElementById("checkout");
if (checkoutHtml) {
  createHtmlCheckout();
}
//Checkout ends here

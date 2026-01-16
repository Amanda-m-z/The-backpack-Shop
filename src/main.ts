import { createCart } from "./Shoppingbag/createCart";
import { createHtmlCheckout } from "./Ts/checkout";
import { loadFooter } from "./Ts/loadFooter";
import { loadHeader } from "./Ts/loadHeader";
import { loopNew } from "./Ts/loopNew";
import { loopPopular } from "./Ts/loopPopular";
import { loadNewsletter } from "./Ts/newsletter";
import { loadProductCard } from "./Ts/product_highlight_card";

import "./scss/style.scss";

const heroButton = document.getElementById("heroCta");

heroButton?.addEventListener("click", () => {
  window.location.href = "src/pages/shop.html";
});

// Load main header
const header = document.getElementById("headerContainer");

if (header) {
  loadHeader();
  //allBackpackslink to shop starts here
  const allBackpacksLink = document.getElementById("allBackpacksLink");

  allBackpacksLink?.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "src/pages/shop.html";
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

const theIconCart = document.getElementById("theCartIcon");
theIconCart?.addEventListener("click", createCart);

//Checkout starts here
const checkout = document.getElementById("temp");

checkout?.addEventListener("click", () => {
  window.location.href = "src/pages/checkout.html";
});

const checkoutHtml = document.getElementById("checkout");
if (checkoutHtml) {
  createHtmlCheckout();
}
//Checkout ends here

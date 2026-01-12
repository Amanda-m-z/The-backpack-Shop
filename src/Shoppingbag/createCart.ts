import type { ProductCart } from "../Backpack/ProductCartType";
import { createHtmlProductInCart } from "../createHtmlProductInCart";
import { addToCart } from "./addToCart";
import { productCount } from "./productCount";
import { removeFromCart } from "./removeFromCart";
import { theTotal } from "./theTotal";

let shoppingBag: ProductCart[] = [];

export const createCart = () => {
  let theCart = document.getElementById("shoppingBag");
  if (theCart) {
    theCart.innerHTML = "";
  }

  if (theCart) {
    theCart.className = "showCart";
  }

  const theString = localStorage.getItem("ShoppingBag");
  if (theString) {
    shoppingBag = JSON.parse(theString);
  }

  const theHeadingDiv = document.createElement("div");
  const myCartHeading = document.createElement("h2");
  myCartHeading.innerHTML = "Min varukorg";
  theHeadingDiv.appendChild(myCartHeading);
  theCart?.appendChild(theHeadingDiv);

  const exitButton = document.createElement("button");
  exitButton.innerHTML = "EXIT";
  theCart?.appendChild(exitButton);

  exitButton.addEventListener("click", () => {
    if (theCart) {
      theCart.className = "shoppingBag";
    }
  });

  shoppingBag.forEach((product) => {
    const checkoutContainer = createHtmlProductInCart(product);
    const quantity = document.createElement("p");

    //Plus och minus tecken
    const plusButton = document.createElement("button");
    const minusButton = document.createElement("button");

    plusButton.innerHTML = "PLUS";
    minusButton.innerHTML = "MINUS";

    plusButton.addEventListener("click", () => {
      addToCart(product);
    });

    minusButton.addEventListener("click", () => {
      removeFromCart(product);
    });

    checkoutContainer.className = "checkoutContainer";
    quantity.innerHTML = `Antal: ${product.quantity}`;

    checkoutContainer.appendChild(quantity);
    checkoutContainer.appendChild(plusButton);
    checkoutContainer.appendChild(minusButton);
    theCart?.appendChild(checkoutContainer);
  });

  let theTotalPrice = theTotal(shoppingBag);

  const showTheTotal = document.createElement("h2");
  showTheTotal.innerHTML = "Total: " + theTotalPrice;
  theCart?.appendChild(showTheTotal);

  const buttonContinueShopping = document.createElement("button");
  buttonContinueShopping.innerHTML = "Fortsätt Handla";

  const buttonGoToCheckout = document.createElement("button");
  buttonGoToCheckout.innerHTML = "Gå till kassa";

  let productCountInCart = productCount(shoppingBag);
  const productCountShow = document.createElement("p");
  productCountShow.innerHTML = "Total produkter: " + productCountInCart;
  theHeadingDiv.appendChild(productCountShow);
};

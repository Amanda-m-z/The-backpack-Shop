import type { ProductCart } from "../../models/ProductCartType";
import { theTotal } from "../../Cart/theTotal";
import { removeAllFromCart } from "./removeFromCheckout";
/* import { removeAllFromCart } from "./removeFromCheckout"; */

export const createHtmlCheckout = () => {
  let shoppingBag: ProductCart[] = [];

  const app = document.getElementById("checkout");
  if (!app) return;

  /* ================= HEADER ================= */
  const head = document.createElement("header");
  head.className = "checkoutHeader";

  const backLink = document.createElement("a");
  backLink.href = "javascript:history.go(-1)";
  backLink.innerHTML = `<i class="fa-solid fa-arrow-left-long"></i> Tillbaka`;

  const headLogo = document.createElement("span");
  headLogo.className = "headLogo";
  headLogo.innerHTML = "Pac Bac";

  head.append(backLink, headLogo);
  app.appendChild(head);

  //===========   H1 kassa =================================
  const checkoutTitle = document.createElement("h1");
  checkoutTitle.innerHTML = "Kassa";
  checkoutTitle.className = "checkoutTitle";
  app.appendChild(checkoutTitle);

  /* ================= CARTSECTIONS ================= */
  const checkoutSection = document.createElement("section");
  checkoutSection.className = "checkoutSection";

  const cartSection = document.createElement("section");
  cartSection.className = "cartSection";

  app.append(cartSection, checkoutSection);

  /* ================= KASSA ================= */

  const checkoutContainer = document.createElement("div");
  checkoutContainer.className = "checkoutContainer";
  checkoutSection.appendChild(checkoutContainer);

  const CheckoutForm = document.createElement("form");
  CheckoutForm.id = "checkoutForm";
  checkoutContainer.appendChild(CheckoutForm);

  /* ================= HÄMTA VARUKORG ================= */
  const storedBag = localStorage.getItem("ShoppingBag");
  if (storedBag) {
    shoppingBag = JSON.parse(storedBag);
  }

  /* ================= PRODUKTER ================= */
  const cartTitle = document.createElement("h2");
  cartTitle.innerHTML = "Dina produkter";
  cartSection.appendChild(cartTitle);

  const checkoutProducts = document.createElement("div");
  checkoutProducts.className = "checkoutProducts";
  cartSection.appendChild(checkoutProducts);

  shoppingBag.forEach((product) => {
    const productContainer = document.createElement("div");
    productContainer.className = "productContainerCheckout";
    const removeBtnCheckout = document.createElement("button");
    removeBtnCheckout.type = "button";
    removeBtnCheckout.className = "removeProductBtn";
    removeBtnCheckout.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;

    removeBtnCheckout.addEventListener("click", () => {
      removeAllFromCart(product);
    });

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;

    const info = document.createElement("div");
    info.className = "productInfo";

    const name = document.createElement("h3");
    name.innerHTML = product.name;

    const price = document.createElement("p");
    price.innerHTML = `${product.price * product.quantity} kr`;

    const quantity = document.createElement("p");
    quantity.innerHTML = `${product.quantity}`;

    const plusMinBtns = document.createElement("div");
    plusMinBtns.className = "plusMinBtns";

    const plusBtn = document.createElement("button");
    plusBtn.type = "button";
    plusBtn.className = "productContainerBtn btn btn-secondary";
    plusBtn.innerHTML = "+";

    plusBtn.addEventListener("click", () => {
      addToCart(product);
    });

    const addToCart = (product: ProductCart) => {
      const found = shoppingBag.find((p) => p.id === product.id);
      if (!found) return;

      found.quantity++;

      localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));
      createHtmlCheckout();
    };

    const minusBtn = document.createElement("button");
    minusBtn.type = "button";
    minusBtn.className = "productContainerBtn btn btn-secondary";
    minusBtn.innerHTML = "-";

    minusBtn.addEventListener("click", () => {
      removeFromCart(product);
    });

    const removeFromCart = (product: ProductCart) => {
      const found = shoppingBag.find((p) => p.id === product.id);
      if (!found) return;

      found.quantity--;

      if (found.quantity <= 0) {
        shoppingBag = shoppingBag.filter((p) => p.id !== product.id);
      }

      localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));
      createHtmlCheckout();
    };

    plusMinBtns.append(minusBtn, quantity, plusBtn);
    info.append(name, price, plusMinBtns);
    /* info.append(name, price, quantity, minusBtn, plusBtn); */
    productContainer.append(removeBtnCheckout, img, info);
    checkoutProducts.appendChild(productContainer);
  });

  const totalProductsPrice = theTotal(shoppingBag);

  const cartTotal = document.createElement("div");
  cartTotal.className = "cartTotal";

  cartTotal.innerHTML = `
  <span class="cartTotalLabel">Total</span>
  <span class="cartTotalAmount">${totalProductsPrice} kr</span>
`;
  const cartDividerTop = document.createElement("hr");
  const cartDividerBottom = document.createElement("hr");

  /* cartSection.appendChild(cartTotal); */
  cartSection.append(cartDividerTop, cartTotal, cartDividerBottom);

  /* ================= FORMULÄR ================= */
  const infoTitle = document.createElement("h3");
  infoTitle.innerHTML = "Dina uppgifter";

  const row = document.createElement("div");
  row.className = "row";

  const createInput = (labelText: string) => {
    const div = document.createElement("div");
    const label = document.createElement("label");
    label.innerHTML = labelText;

    const input = document.createElement("input");
    input.required = true;

    div.append(label, input);
    return div;
  };

  row.append(
    createInput("Förnamn"),
    createInput("Efternamn"),
    createInput("Adress"),
    createInput("Postnummer"),
    createInput("Ort")
  );

  /* ================= FRAKT ================= */
  const shippingTitle = document.createElement("h3");
  shippingTitle.innerHTML = "Välj frakt";

  const shippingOptions = document.createElement("div");
  shippingOptions.className = "options";

  const createShipping = (text: string) => {
    const label = document.createElement("label");
    label.className = "shippingOption";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "shipping";

    const title = document.createElement("span");
    title.className = "shippingText";
    title.innerHTML = text;

    const free = document.createElement("span");
    free.className = "shippingFree";
    free.innerHTML = "Frifrakt";

    label.append(input, title, free);
    return label;
  };
  shippingOptions.append(
    createShipping("PostNord"),
    createShipping("Hemleverans")
  );

  /* ================= TOTAL ================= */
  const totalDiv = document.createElement("div");
  totalDiv.className = "total";
  totalDiv.innerHTML = `
  <span class="totalLabel">Total belopp</span>
  <span class="totalAmount">${totalProductsPrice} kr</span>
`;
  const totalDividerTop = document.createElement("hr");
  totalDividerTop.className = "fullWidthDivider";

  const totalDividerBottom = document.createElement("hr");
  totalDividerBottom.className = "fullWidthDivider";

  /* ================= BETALNING ================= */
  const paymentTitle = document.createElement("h3");
  paymentTitle.innerHTML = "Betalningsmetod";

  const paymentOptions = document.createElement("div");
  paymentOptions.className = "paymentOptions";

  ["Kort", "Klarna", "Swish", "PayPal", "Google Pay", "Apple Pay"].forEach(
    (method) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "payment";
      label.append(input, ` ${method}`);
      paymentOptions.appendChild(label);
    }
  );

  /* ================= SUBMIT ================= */

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "submitButton btn btn-primary";
  submitButton.innerHTML = "Betala köpet";

  CheckoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (shoppingBag.length === 0) {
      alert("Varukorgen är tom");
      return;
    }

    alert("Tack för ditt köp!");
  });

  /* ================= APPEND ================= */
  CheckoutForm.append(
    infoTitle,
    row,
    shippingTitle,
    shippingOptions,

    paymentTitle,
    paymentOptions,

    totalDividerTop,
    totalDiv,
    totalDividerBottom,

    submitButton
  );
};

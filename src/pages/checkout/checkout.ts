import type { ProductCart } from "../../models/ProductCartType";
import { addToCart } from "../../Cart/addToCart";
import { removeFromCart } from "../../Cart/removeFromCart";
import { theTotal } from "../../Cart/theTotal";

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
    productContainer.className = "productContainer";

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;

    const info = document.createElement("div");
    info.className = "productInfo";

    const name = document.createElement("h3");
    name.innerHTML = product.name;

    const price = document.createElement("p");
    price.innerHTML = `${product.price} kr`;

    const quantity = document.createElement("p");
    quantity.innerHTML = `Antal: ${product.quantity}`;

    const plusBtn = document.createElement("button");
    plusBtn.type = "button";
    plusBtn.innerHTML = "+";
    plusBtn.onclick = () => addToCart(product);

    const minusBtn = document.createElement("button");
    minusBtn.type = "button";
    minusBtn.innerHTML = "-";
    minusBtn.onclick = () => removeFromCart(product);

    info.append(name, price, quantity, minusBtn, plusBtn);
    productContainer.append(img, info);
    checkoutProducts.appendChild(productContainer);
  });

  const totalProductsPrice = theTotal(shoppingBag);

  const cartTotal = document.createElement("h3");
  cartTotal.innerHTML = `Produkter totalt: ${totalProductsPrice} kr`;
  cartSection.appendChild(cartTotal);

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
    createShipping("PostNord Frifrakt"),
    createShipping("Hemleverans Frifrakt")
  );

  /* ================= TOTAL ================= */
  const totalDiv = document.createElement("div");
  totalDiv.className = "total";
  totalDiv.innerHTML = `Totalt att betala: <strong>${totalProductsPrice} kr</strong>`;

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
  submitButton.className = "submitButton";
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
    totalDiv,
    paymentTitle,
    paymentOptions,
    submitButton
  );
};

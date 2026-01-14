import type { ProductCart } from "../Backpack/ProductCartType";
<<<<<<< HEAD
=======
import { addToCart } from "../Shoppingbag/addToCart";
import { removeFromCart } from "../Shoppingbag/removeFromCart";
import { theTotal } from "../Shoppingbag/theTotal";

let shoppingBag: ProductCart[] = [];
>>>>>>> dc5d07e538469bf7d10f10787389c342392c3f01

const app = document.getElementById("app");

// Header
const head = document.createElement("div");

const backLink = document.createElement("a");
backLink.href = "#";
backLink.innerHTML = "Tillbaka";

const headLogo = document.createElement("img"); //ändra till text
headLogo.src = "";
headLogo.alt = "";

head.append(backLink, headLogo);
app?.appendChild(head);

let shoppingBag: ProductCart[] = [];
// Container
const checkoutContainer = document.createElement("div");
checkoutContainer.className = "checkoutContainer";
app?.appendChild(checkoutContainer);

// Form
const CheckoutForm = document.createElement("form");
CheckoutForm.id = "checkoutForm";
checkoutContainer.appendChild(CheckoutForm);

// Title
const checkoutTitle = document.createElement("h1");
checkoutTitle.innerHTML = "Kassa";
CheckoutForm.appendChild(checkoutTitle);

const productCount = document.createElement("p");
productCount.innerHTML = "Antal produkter";
CheckoutForm.appendChild(productCount);

// Product
const productDiv = document.createElement("div");
productDiv.className = "CheckoutProduct";

const productImg = document.createElement("img");
productImg.alt = "Produkt";

const productInfo = document.createElement("div");
productInfo.className = "checkoutProductInfo";

const productName = document.createElement("div");
productName.innerHTML = "";

const productPrice = document.createElement("div");
productPrice.innerHTML = "1099 kr"; //kunna hämta function kanske

productInfo.append(productName, productPrice); //lägga till färg med

let theCart = document.getElementById("shoppingBag"); //byta ut ovan till denna typ
if (theCart) {
  theCart.innerHTML = "";
}

const theString = localStorage.getItem("ShoppingBag");
if (theString) {
  shoppingBag = JSON.parse(theString);
}

// hämtad kod för varukorgen med lite ändrad info
shoppingBag.forEach((product) => {
  const productContainer = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const extraInfo = document.createElement("div");
  const name = document.createElement("h2");
  const price = document.createElement("p");

  productContainer.className = "productContainer";
  imgContainer.className = "imgContainer";
  imgContainer.id = "imgContainerID";
  img.src = product.img;
  extraInfo.className = "productInfo";
  name.innerHTML = product.name;
  name.id = "nameID";
  price.innerHTML = product.price + " kr";
  price.className = "pricetag";

  imgContainer.appendChild(img);
  productContainer.appendChild(imgContainer);
  extraInfo.appendChild(name);
  extraInfo.appendChild(price);

  productContainer.appendChild(extraInfo);

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

  productContainer.className = "checkoutContainer";
  quantity.innerHTML = `Antal: ${product.quantity}`;

  productContainer.appendChild(quantity);
  productContainer.appendChild(plusButton);
  productContainer.appendChild(minusButton);
  theCart?.appendChild(productContainer);
});

let theTotalPrice = theTotal(shoppingBag);

const showTheTotal = document.createElement("h2");
showTheTotal.innerHTML = "Total: " + theTotalPrice;
theCart?.appendChild(showTheTotal);

let productCountInCart = productCount(shoppingBag);
const productCountShow = document.createElement("p");
productCountShow.innerHTML = "Total produkter: " + productCountInCart;
theHeadingDiv.appendChild(productCountShow);

// Quantity  Behövs inte om ovan fungerar
/* const qtyDiv = document.createElement("div");
qtyDiv.className = "checkoutQty";

const minusBtn = document.createElement("button");
minusBtn.innerHTML = "-"; // icon

const quantitySpan = document.createElement("span");
quantitySpan.className = "checkoutQuantity";
quantitySpan.innerHTML = "1"; 

const plusBtn = document.createElement("button");
plusBtn.innerHTML = "+"; // icon

qtyDiv.append(minusBtn, quantitySpan, plusBtn);

productDiv.append(productImg, productInfo, qtyDiv);
CheckoutForm.appendChild(productDiv);
 */
// Shipping
const shippingTitle = document.createElement("h3");
shippingTitle.innerHTML = "Välj frakt";
CheckoutForm.appendChild(shippingTitle);

const shippingOptions = document.createElement("div");
shippingOptions.className = "options";

function createShippingOption(labelText: string): HTMLLabelElement {
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "shipping";
  input.value = "0";
  label.append(input, ` ${labelText}`);
  return label;
}

shippingOptions.append(
  createShippingOption("PostNord Frifrakt"),
  createShippingOption("Hemleverans Frifrakt")
);

CheckoutForm.appendChild(shippingOptions);

//  Total
const totalDiv = document.createElement("div");
totalDiv.className = "total";
totalDiv.innerHTML = `Totalt: <span id="total">0</span> kr`;
CheckoutForm.appendChild(totalDiv);

// ===== Customer Info =====
const infoTitle = document.createElement("h3");
infoTitle.innerHTML = "Dina uppgifter";
CheckoutForm.appendChild(infoTitle);

const row = document.createElement("div");
row.className = "row";

function createInput(labelText: string): HTMLDivElement {
  const div = document.createElement("div");
  const label = document.createElement("label");
  label.innerHTML = labelText;
  const input = document.createElement("input");
  input.type = "text";
  input.required = true;
  div.append(label, input);
  return div;
}

row.append(
  createInput("Förnamn"),
  createInput("Efternamn"),
  createInput("Leveransadress"),
  createInput("Postnummer"),
  createInput("Ort")
);

CheckoutForm.appendChild(row);

//  Payment
const paymentTitle = document.createElement("h2");
paymentTitle.innerHTML = "Betalningsmetod";
CheckoutForm.appendChild(paymentTitle);

const paymentOptions = document.createElement("div");
paymentOptions.className = "paymentOptions";

const payments = [
  "Kort",
  "Klarna",
  "Swish",
  "PayPal",
  "Apple Pay",
  "Google Pay",
];

payments.forEach((method) => {
  const label = document.createElement("label");
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "payment";
  label.append(input, ` ${method}`);
  paymentOptions.appendChild(label);
});

//Button submit
const submitButton: HTMLButtonElement = document.createElement("button");
submitButton.type = "submit";
submitButton.innerHTML = "Betala köpet";
submitButton.className = "submitButton";

CheckoutForm.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();

  if (shoppingBag.length === 0) {
    alert("Varukorgen är tom");
    return;
  }

  alert("Tack för ditt köp!");
});

//Append
CheckoutForm.appendChild(paymentOptions);
CheckoutForm.appendChild(submitButton);

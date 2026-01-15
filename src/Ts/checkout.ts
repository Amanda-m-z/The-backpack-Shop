const app = document.getElementById("app");

// Header
const head = document.createElement("div");

const backLink = document.createElement("a");
backLink.href = "#";
backLink.innerHTML = "Tillbaka";

const headLogo = document.createElement("img");
headLogo.src = "";
headLogo.alt = "";

head.append(backLink, headLogo);
app.appendChild(head);

// Container
const checkoutContainer = document.createElement("div");
checkoutContainer.className = "checkoutContainer";
app.appendChild(checkoutContainer);

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

// Quantity
const qtyDiv = document.createElement("div");
qtyDiv.className = "checkoutQty";

const minusBtn = document.createElement("button");
minusBtn.innerHTML = "-"; // icon

const quantitySpan = document.createElement("span");
quantitySpan.className = "checkoutQuantity";
quantitySpan.innerHTML = "1"; //kunna ändra

const plusBtn = document.createElement("button");
plusBtn.innerHTML = "+"; // icon

qtyDiv.append(minusBtn, quantitySpan, plusBtn);

productDiv.append(productImg, productInfo, qtyDiv);
CheckoutForm.appendChild(productDiv);

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

CheckoutForm.appendChild(paymentOptions);

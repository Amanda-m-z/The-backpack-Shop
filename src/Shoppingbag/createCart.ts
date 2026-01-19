import type { ProductCart } from "../BackpackType/ProductCartType";
import { addToCart } from "./addToCart";
import { productCount } from "./productCount";
import { removeFromCart } from "./removeFromCart";
import { theTotal } from "./theTotal";

let shoppingBag: ProductCart[] = [];

//===== main funktion  ===== //
export const createCart = () => {
  console.log("DU ÖPPNAR DENNA FUNKTION");
  const cart = document.getElementById("cartOverlay");
  if (!cart) return;

  cart.innerHTML = "";
  cart.className = "showCart";

  const theString = localStorage.getItem("ShoppingBag");
  shoppingBag = theString ? JSON.parse(theString) : [];

  cart.appendChild(createHeader(cart));

  shoppingBag.forEach((product) => {
    cart.appendChild(createProductRow(product));
  });

  cart.appendChild(createTotal());
  cart.appendChild(createFooter(cart));
};

/* ==== Header =====*/
const createHeader = (cart: HTMLElement) => {
  const header = document.createElement("div");

  const title = document.createElement("h2");
  title.innerHTML = "VARUKORG";

  const count = document.createElement("p");
  count.textContent = "Total produkter: " + productCount(shoppingBag);

  const exitButton = document.createElement("button");
  exitButton.textContent = "X";
  exitButton.onclick = () => {
    cart.className = "shoppingBag";
  };
  header.append(title, count, exitButton);
  return header;
};

/* ==== Produkt row ===== */
const createProductRow = (product: ProductCart) => {
  const productContainer = document.createElement("div");
  productContainer.className = "productContainer";

  // Container//
  const imgContainer = document.createElement("div");
  imgContainer.className = "imgContainer";

  // Img //
  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;
  imgContainer.appendChild(img);

  // Info about product //
  const info = document.createElement("div");
  info.className = "productInfo";

  const name = document.createElement("h5");
  name.className = "productname";
  name.textContent = product.name;

  const price = document.createElement("p");
  price.className = "productprice";
  price.textContent = product.price + " kr";

  info.append(name, price);

  // -btn quantity +btn//
  const minus = document.createElement("button");
  minus.textContent = "-";
  minus.onclick = () => removeFromCart(product);

  const quantity = document.createElement("p");
  quantity.textContent = `${product.quantity}`;

  const plus = document.createElement("button");
  plus.textContent = "+";
  plus.onclick = () => addToCart(product);

  productContainer.append(imgContainer, info, minus, quantity, plus);
  return productContainer;
};

// Total sum //
const createTotal = () => {
  const total = document.createElement("h2");
  total.className = "totalprice";
  total.textContent = "Total: " + theTotal(shoppingBag) + " kr";
  return total;
};

/*===== Footer with btn ====== */

const createFooter = (cart: HTMLElement) => {
  const footer = document.createElement("div");
  footer.className = "cartFooter";

  const continueBtn = document.createElement("button");
  continueBtn.id = "continueBtn";
  continueBtn.textContent = "Fortsätt handla";
  continueBtn.onclick = () => {
    cart.className = "shoppingBag";
  };

  const checkoutBtn = document.createElement("button");
  checkoutBtn.id = "checkoutBtn";
  checkoutBtn.textContent = "Gå till kassa";
  checkoutBtn.onclick = () => {
    window.location.href = "src/pages/checkout.html";
  };

  footer.append(continueBtn, checkoutBtn);
  return footer;
};

/*
    exitButton.addEventListener("click", () => {
        if (theCart) {
            theCart.className = "shoppingBag";
        }
    })

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
}
*/

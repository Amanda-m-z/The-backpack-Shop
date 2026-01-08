import { Backpack } from "../Backpack type/Backpack";
import { addToCart } from "./addToCart";
import { removeFromCart } from "./removeFromCart";
import { theTotal } from "./theTotal";


let shoppingBag: Backpack[] = [];




export const createCart = () => {
    let theCart = document.getElementById("shoppingBag");
    if(theCart){
        theCart.innerHTML = "";
    }
   
    if (theCart){
        theCart.className = "showCart";
    }

    const theString = localStorage.getItem("ShoppingBag");
    if (theString){
        shoppingBag = JSON.parse(theString);
    }


    const myCartHeading = document.createElement("h2");
    myCartHeading.innerHTML = "Min varukorg"
    theCart?.appendChild(myCartHeading);


    
    const exitButton = document.createElement("button");
    exitButton.innerHTML = "EXIT"
    theCart?.appendChild(exitButton);

    exitButton.addEventListener("click", () => {
        if (theCart) {
            theCart.className = "shoppingBag";
        }
    })


    shoppingBag.forEach((product) => {

    const checkoutContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const extraInfo = document.createElement("div");
    const name = document.createElement("h2");
    const price = document.createElement("p");
    const quantity = document.createElement("p");


    //Plus och minus tecken
    const plusButton = document.createElement("button");
    const minusButton = document.createElement("button");

    plusButton.innerHTML = "PLUS"
    minusButton.innerHTML = "MINUS"

    plusButton.addEventListener("click", () => {
     addToCart(product);
    });

    minusButton.addEventListener("click", () => {
        removeFromCart(product);
    })

    extraInfo.className = "extraInfo"
    img.src = product.img;
    name.innerHTML = product.name;
    price.innerHTML = product.price+"kr";
    checkoutContainer.className = "checkoutContainer";
    imgContainer.className = "imgContainerCheckout";
    quantity.innerHTML = `Antal: ${product.quantity}`;


    imgContainer.appendChild(img);
    extraInfo.appendChild(name);
    extraInfo.appendChild(price);
    extraInfo.appendChild(quantity);
    extraInfo.appendChild(plusButton);
    extraInfo.appendChild(minusButton);
    checkoutContainer.appendChild(imgContainer);
    checkoutContainer.appendChild(extraInfo);
    theCart?.appendChild(checkoutContainer);

    });
    
    let theTotalPrice = theTotal(shoppingBag);
    console.log(theTotalPrice);

    const showTheTotal = document.createElement("h2");
    showTheTotal.innerHTML = "Total: " + theTotalPrice; 
    theCart?.appendChild(showTheTotal);
    
    

}





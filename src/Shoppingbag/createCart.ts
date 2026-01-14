import type { ProductCart } from "../Backpack/ProductCartType";
import { addToCart } from "./addToCart";
import { productCount } from "./productCount";
import { removeFromCart } from "./removeFromCart";
import { theTotal } from "./theTotal";


let shoppingBag: ProductCart[] = [];


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


    const theHeadingDiv = document.createElement("div"); 
    const myCartHeading = document.createElement("h2");
    myCartHeading.innerHTML = "Min varukorg"
    theHeadingDiv.appendChild(myCartHeading);
    theCart?.appendChild(theHeadingDiv);

    const exitButton = document.createElement("button");
    exitButton.innerHTML = "EXIT"
    theCart?.appendChild(exitButton);

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

    plusButton.innerHTML = "PLUS"
    minusButton.innerHTML = "MINUS"

    plusButton.addEventListener("click", () => {
     addToCart(product);
    });

    minusButton.addEventListener("click", () => {
        removeFromCart(product);
    })

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
    
    const buttonContinueShopping = document.createElement("button");
    buttonContinueShopping.innerHTML = "Fortsätt Handla";

    const buttonGoToCheckout = document.createElement("button");
    buttonGoToCheckout.innerHTML = "Gå till kassa";

    
    let productCountInCart = productCount(shoppingBag); 
    const productCountShow = document.createElement("p");
    productCountShow.innerHTML = "Total produkter: " +productCountInCart;
    theHeadingDiv.appendChild(productCountShow);

}





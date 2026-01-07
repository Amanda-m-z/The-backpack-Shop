import { Backpack } from "../Backpack type/Backpack";

export let shoppingBag: Backpack[] = [];



export const addToCart = (theNewBag: Backpack) => {

    shoppingBag.push(theNewBag);
    localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));
    
}

export const createCart = () => {
    let theCart = document.getElementById("shoppingBag");
    if(theCart){
      //  theCart.innerHTML = "";
    }
   
    if (theCart){
        theCart.className = "showCart";
    }

    const theString = localStorage.getItem("ShoppingBag");
    if (theString){
        shoppingBag = JSON.parse(theString);
    }

    
    shoppingBag.forEach((product) => {

    const checkoutContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const extraInfo = document.createElement("div");
    const name = document.createElement("h2");
    const price = document.createElement("p");

    extraInfo.className = "extraInfo"
    img.src = product.img;
    name.innerHTML = product.name;
    price.innerHTML = product.price+"kr";
    checkoutContainer.className = "checkoutContainer";
    imgContainer.className = "imgContainerCheckout";

    imgContainer.appendChild(img);
    //checkoutContainer.appendChild(imgContainer);
    extraInfo.appendChild(name);
    extraInfo.appendChild(price);
    checkoutContainer.appendChild(extraInfo);
    theCart?.appendChild(checkoutContainer);

    });

    

  
}




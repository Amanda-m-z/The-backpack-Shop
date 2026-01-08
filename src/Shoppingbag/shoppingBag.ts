import { Backpack } from "../Backpack type/Backpack";


export let shoppingBag: Backpack[] = [];



export const addToCart = (theNewBag: Backpack) => {

    const theCartString = localStorage.getItem("ShoppingBag")
    if (theCartString) {
        shoppingBag = JSON.parse(theCartString);
    }

   const id = theNewBag.id;

   if(shoppingBag.find(item => item.id === id)) {
    console.log("Varan finns redan" + theNewBag.quantity);
        shoppingBag = shoppingBag.filter(item => item.id !== id);
         theNewBag.quantity++;
        shoppingBag.push(theNewBag);
        localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));
        console.log(theNewBag.quantity);
   }
   else {
    console.log("Varan finns inte än!");
          shoppingBag.push(theNewBag);
        localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));
   }




    //if (isItem !== null)
   // {
    
    //theNewBag.quantity = theNewBag.quantity + 1;
       // console.log(theNewBag.quantity);
    //}
  //  if (isItem === null) {
      //  shoppingBag.push(theNewBag);
     //   localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag));

    //}
   // else {
     //       theNewBag.quantity = theNewBag.quantity + 1;
       // console.log(theNewBag.quantity);

   // }

    
    
}

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

    console.log(shoppingBag);

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




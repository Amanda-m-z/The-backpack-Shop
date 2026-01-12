import type { Product } from "../Backpack/ProductType";
import { createButtonBUY } from "../createButtonBUY";
import { createHTMLGeneral } from "../createHtmlGeneral";
import { addToCart } from "../Shoppingbag/addToCart";


export const createHTMLOneProduct = () => {  //Detta skapar view för en produkt
    
    const oneProductView = document.getElementById("oneProductView");
    if (oneProductView) {
        oneProductView.innerHTML = "";
    }

    let oneBag:Product = JSON.parse(localStorage.getItem("TheBag") || '""'); //Hämtar produkten 
 
    const productContainer = createHTMLGeneral(oneBag);  //Skapar html och lagrar i productContainer
    const buttonBuy = createButtonBUY();                   //Skapar buyButton och lagar i buttonBuy

    productContainer.appendChild(buttonBuy);            //Lägg buttonBuy i productContainer
    oneProductView?.appendChild(productContainer);      //Lägg productContainer i div oneProductView så syns på skärmen
    
  buttonBuy.addEventListener("click", () => {        //Om du klickar buy så läggs backPack i kundkorg
    addToCart(oneBag);
   });

}
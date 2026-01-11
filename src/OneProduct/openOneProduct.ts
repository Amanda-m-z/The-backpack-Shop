import type { Product } from "../Backpack/ProductType";


export const openOneProduct = (item: Product) => {  //Öppnar sidan oneproduct med produkten man klickat på

     const theBag = JSON.stringify(item);   //Gör till string
     localStorage.setItem("TheBag", theBag);   //Spara i localStorage
     window.location.href = "../pages/oneproduct.html"; //Öppna oneproduct sida
}
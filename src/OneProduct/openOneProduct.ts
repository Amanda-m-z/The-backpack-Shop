import type { Backpack } from "../Backpack type/Backpack";


export const openOneProduct = (item: Backpack) => {  //Öppnar sidan oneproduct med produkten man klickat på

     const theBag = JSON.stringify(item);   //Gör till string
     localStorage.setItem("TheBag", theBag);   //Spara i localStorage
     window.location.href = "../pages/oneproduct.html"; //Öppna oneproduct sida
}
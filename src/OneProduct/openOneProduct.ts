import type { Backpack } from "../Backpack type/Backpack";


export const openOneProduct = (item: Backpack) => {  //Öppnar sidan oneproduct med produkten man klickat på

     const theBag = JSON.stringify(item);
     localStorage.setItem("TheBag", theBag);
     window.location.href = "../pages/oneproduct.html";
     
}
import type { Backpack } from "../Backpack type/Backpack";


export const openOneProduct = (item: Backpack) => {
     console.log(item.color);
     console.log(item.name);
     console.log(item.type);
     console.log(item.purchases);

     const theBag = JSON.stringify(item);
     localStorage.setItem("TheBag", theBag);
     window.location.href = "../pages/oneproduct.html";
     
}
import type { Backpack } from "../Backpack type/Backpack";


export const createHTMLOneProduct = () => {
    
    const oneProductView = document.getElementById("oneProductView");
    
    if (oneProductView) {
        oneProductView.innerHTML = "";
    }

    let oneBag:Backpack = JSON.parse(localStorage.getItem("TheBag") || '""');
    console.log("HÄR ÄR VARIABEL" + oneBag);

    //const divOneItem = document.createElement("div"); 
    const imgContainer = document.createElement("div");
    const img = document.createElement("img");
    const extraInfo = document.createElement("div");
    const name = document.createElement("h2");
    const price = document.createElement("p");
    const color = document.createElement("p");
    const buttonBuy = document.createElement("button");

    img.src = oneBag.img;
    imgContainer.className = "oneProductImg";
    extraInfo.className = "sideInfo";
    name.innerHTML = oneBag.name;
    price.innerHTML = oneBag.price + "kr"
    color.innerHTML = "Color: " + oneBag.color;
    buttonBuy.innerHTML = "Lägg i varukorgen"

    imgContainer.appendChild(img);
    oneProductView?.appendChild(imgContainer);
    extraInfo.appendChild(name);
    extraInfo.appendChild(price);
    extraInfo.appendChild(color);
    extraInfo.appendChild(buttonBuy);
    oneProductView?.appendChild(extraInfo);
    //oneProductView?.appendChild(divOneItem);

    


}
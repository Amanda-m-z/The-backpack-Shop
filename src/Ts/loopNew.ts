import type { Product } from "../Backpack/ProductType";
import { getProduct } from "../getProduct";


export const loopNew = async (): Promise<void> => {

  let listNew: Product[] = await getProduct();
  const div = document.getElementById("newDiv");

  

  listNew = listNew.filter(item => item.freshness === "new");
  console.log("Här är new", listNew);

  listNew.forEach((item) => {

        const productContainer = document.createElement("div");
        const imgContainer = document.createElement("div");
        const img = document.createElement("img");
        const extraInfo = document.createElement("div");
        const name = document.createElement("h2");
        const price = document.createElement("p");
    
        productContainer.className = "productContainer";
        imgContainer.className = "imgContainer";
        imgContainer.id = "imgContainerID";
        img.src = item.img;
        extraInfo.className = "extraInfo"
        name.innerHTML = item.name;
        name.id = ("nameID");
        price.innerHTML = item.price+"kr";
    
    
        imgContainer.appendChild(img);
        productContainer.appendChild(imgContainer);
        extraInfo.appendChild(name);
        extraInfo.appendChild(price);
        productContainer.appendChild(extraInfo);
        div?.appendChild(productContainer);
    
        
        imgContainer.addEventListener("click", () => {
         //openOneProduct(item);
          const theBag = JSON.stringify(item);   //Gör till string
          localStorage.setItem("TheBag", theBag);   //Spara i localStorage
          window.location.href = "src/pages/oneproduct.html"; //Öppna oneproduct sida
        });
  });

}


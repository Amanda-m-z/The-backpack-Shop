import type { ProductCart } from "../models/ProductCartType";
import type { Product } from "../models/ProductType";
import { createCart } from "./createCart";

export const addToCart = (theNewBag: Product | ProductCart) => {
  //Denna fuktion lägger till ett produkt i kundkorgen

  let shoppingBag: ProductCart[] = [];

  const theCartString = localStorage.getItem("ShoppingBag"); //Hämta lista från localstorage och lagra i lista
  if (theCartString) {
    shoppingBag = JSON.parse(theCartString);
  }

  const existingItem = shoppingBag.find((item) => item.id === theNewBag.id); //Det hittar produkten som redan finns i listan
  //Sök efter om item redan finns i listan

  if (existingItem) {
    //Om varan finns så ökas antalet med 1
    existingItem.quantity++;
  } else {
    const newItemBag: ProductCart = {
      id: theNewBag.id,
      name: theNewBag.name,
      price: theNewBag.price,
      img: theNewBag.img,
      type: theNewBag.type,
      color: theNewBag.color,
      quantity: 1,
    };
    shoppingBag.push(newItemBag); //Om varan inte finns så läggs det till i kundkoren
  }

  localStorage.setItem("ShoppingBag", JSON.stringify(shoppingBag)); //Lagrar ändringen i localstorage
  createCart(); //Uppdatera cart
};

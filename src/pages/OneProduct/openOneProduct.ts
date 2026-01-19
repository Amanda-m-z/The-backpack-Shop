import type { ProductCart } from "../../models/ProductCartType";
import type { Product } from "../../models/ProductType";

export const openOneProduct = (item: Product | ProductCart) => {
  //Öppnar sidan oneproduct med produkten man klickat på

  const theBag = JSON.stringify(item); //Gör till string
  localStorage.setItem("TheBag", theBag); //Spara i localStorage
  window.location.href = "../../../oneproduct.html"; //Öppna oneproduct sida
};

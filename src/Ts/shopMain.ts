import '../scss/style.scss';
import { allProducts } from "../Backpack type/allProducts";
import { createHTML } from "../createHTMLShop";



const oneProductDiv = document.getElementById("oneProductView");
createHTML(allProducts);





import '../style.scss';
import { allProducts } from "../Backpack type/allProducts";
import { createHTML } from "../createHTML";



const oneProductDiv = document.getElementById("oneProductView");
createHTML(allProducts);





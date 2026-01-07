import './style.scss'

import { createHTML } from "./createHTML";
import { allProducts } from './Backpack type/allProducts';
import { createHTMLOneProduct } from './OneProduct/productOneView';



createHTML(allProducts);


const oneProductDiv = document.getElementById("oneProductView");

createHTMLOneProduct();
import '../scss/style.scss'; 
import { createHTML } from "../MainShop/createHTMLShop";

import { getProduct } from '../getProduct';
import type { Product } from '../Backpack/ProductType';

//Detta är för produksidan med alla produkter = shop.html 

const theProducts: Product[] = await getProduct();

const GridDiv = document.getElementById("products-grid");

//console.log("Detta är resultatet av din fetch", theProducts);

createHTML(theProducts);   //AKTIVERA SENARE



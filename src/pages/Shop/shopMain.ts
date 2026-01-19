import '../../scss/style.scss'; 
import { createHTML } from "./createHTMLShop";

import type { Product } from '../../models/ProductType';
import {loadProductHero } from '../../Ts/productHero';
import { getProduct } from '../../Services/getProduct';


//Detta är för produksidan med alla produkter = shop.html 

const theProducts: Product[] = await getProduct();

const productHeroSection = document.getElementById("product-hero");
if (productHeroSection)
  loadProductHero();

 //const GridDiv = document.getElementById("products-grid");

//console.log("Detta är resultatet av din fetch", theProducts);

createHTML(theProducts);   //AKTIVERA SENARE



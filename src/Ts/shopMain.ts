import '../scss/style.scss'; 
import { createHTML } from "../MainShop/createHTMLShop";

import { getProduct } from '../getProduct';
import type { Product } from '../Backpack/ProductType';
import {loadProductHero } from './productHero';


//Detta är för produksidan med alla produkter = shop.html 

const theProducts: Product[] = await getProduct();

const productHeroSection = document.getElementById("product-hero");
if (productHeroSection)
  loadProductHero();

 const GridDiv = document.getElementById("products-grid");

//console.log("Detta är resultatet av din fetch", theProducts);

createHTML(theProducts);   //AKTIVERA SENARE



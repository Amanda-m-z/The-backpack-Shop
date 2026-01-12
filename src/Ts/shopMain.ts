import '../scss/style.scss';
import { createHTML } from "../MainShop/createHTMLShop";
import type { Product } from '../Backpack/ProductType';
import { getProduct } from '../getProduct';

//Detta är för produksidan med alla produkter = shop.html 



const theProducts: Product[] = await getProduct();

console.log("Detta är resultatet av din fetch", theProducts);

createHTML(theProducts);



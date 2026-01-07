import { createHTMLOneProduct } from './OneProduct/productOneView';
import { createCart } from './Shoppingbag/shoppingBag';
import './styleOne.scss' 


createHTMLOneProduct();


const theButtonCart = document.getElementById("temp");

theButtonCart?.addEventListener("click", createCart);


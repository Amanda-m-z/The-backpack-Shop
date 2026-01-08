import '../scss/styleOne.scss'; 
import { createHTMLOneProduct } from '../OneProduct/createHTMLOneProduct';
import { createCart } from '../Shoppingbag/createCart';






const theButtonCart = document.getElementById("temp");

theButtonCart?.addEventListener("click", createCart);

createHTMLOneProduct();

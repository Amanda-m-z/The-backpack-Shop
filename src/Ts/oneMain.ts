import '../scss/styleOne.scss'; 
import { createHTMLOneProduct } from '../OneProduct/createHTMLOneProduct';
import { createCart } from '../Shoppingbag/createCart';

//Detta är för sidan där en produkt syns = oneproduct.html

const theButtonCart = document.getElementById("temp");  //Button för öppna cart. Provisorisk
theButtonCart?.addEventListener("click", createCart);   //Öppna cart genom att starta funktion createCart

createHTMLOneProduct();                                 //Körs i början och skapar html för produkten sparad i local storage
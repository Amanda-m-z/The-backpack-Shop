import "../../scss/_oneProductPage.scss";
import { createHTMLOneProduct } from "./createHTMLOneProduct";
import { createCart } from "../../Cart/createCart";

//Detta är för sidan där en produkt syns = oneproduct.html

const theButtonCart = document.getElementById("temp"); //Button för öppna cart. Provisorisk
theButtonCart?.addEventListener("click", createCart); //Öppna cart genom att starta funktion createCart

createHTMLOneProduct(); //AKTIVERA SENARE                                  //Körs i början och skapar html för produkten sparad i local storage

import type { ItemCart } from "../Backpack type/itemCart";

export const productCount = (shoppingBag: ItemCart[]) => {   //Denna funtion räknar antalet produkter i hela kundkorgen
    
    let productCount = 0; //Variabel för antal

    shoppingBag.forEach((item) => {  //Loppar igenom lista 
        
        productCount += item.quantity; //Antalet är + antal för varje produkt i listan
    });

    return productCount; 
}
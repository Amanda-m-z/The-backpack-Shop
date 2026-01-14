import type { ProductCart } from "../BackpackType/ProductCartType";

export const productCount = (shoppingBag: ProductCart[]) => {   //Denna funtion räknar antalet produkter i hela kundkorgen
    
    let productCount = 0; //Variabel för antal

    shoppingBag.forEach((item) => {  //Loppar igenom lista 
        
        productCount += item.quantity; //Antalet är + antal för varje produkt i listan
    });

    return productCount; 
}
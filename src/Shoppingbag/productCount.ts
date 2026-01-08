import type { Backpack } from "../Backpack type/Backpack";

export const productCount = (shoppingBag: Backpack[]) => {
    
    let productCount = 0;

    shoppingBag.forEach((item) => {
        
        const theTotalForOneItem = item.quantity;
        productCount += theTotalForOneItem; 
    });

    return productCount;
}
import type { Backpack } from "../Backpack type/Backpack";

export const theTotal = (shoppingBag: Backpack[]) => {

    let theTotalForAll = 0;

    shoppingBag.forEach((item) => {
        
        const theItem = item.quantity;
        const thePrice = item.price;
        
        const theTotalForOneItem = (theItem*thePrice);
        theTotalForAll += theTotalForOneItem; 
    });

    return theTotalForAll;
}
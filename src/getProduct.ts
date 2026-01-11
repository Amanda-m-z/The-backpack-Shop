import type { Product } from "./Backpack/ProductType";


export const getProduct = async ():Promise<Product[]> => {

    const response = await fetch("/Backpacktype/allProducts.json");
    const data: Product[] = await response.json(); 
    return data;
}
import type { Product } from "./Backpack/ProductType";
import axios from "axios";


export const getProduct = async ():Promise<Product[]> => {

    //const response = await fetch("/Backpacktype/allProducts.json");
    //const data: Product[] = await response.json(); 
    //return data;
    const response = await axios.get<Product[]>("/Backpacktype/allProducts.json");
    return response.data;
}


    

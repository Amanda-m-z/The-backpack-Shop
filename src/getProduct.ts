
import axios from "axios";
import type { Product } from "./BackpackType/ProductType";


export const getProduct = async ():Promise<Product[]> => {
    const response = await axios.get<Product[]>("/Backpacktype/allProducts.json");
    return response.data;
}


    

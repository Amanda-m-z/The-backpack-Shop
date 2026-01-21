import axios from "axios";
import type { Product } from "../models/ProductType";

export const getProduct = async ():Promise<Product[]> => {
    const response = await axios.get<Product[]>("/allProducts.json");
    return response.data;
}


    

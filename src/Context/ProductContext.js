import React, { createContext, useState } from "react";
import axios from "axios";
// Create the context
export const ProductContext = createContext();


export default function ProductContextProvider({ children }) {
    async function fetchProducts(){
        try{
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products); 
        }catch(error){
            console.error(error)
        }
    }
    // State for managing products
    const [getProducts, setProducts] = useState([]);

    return (
        <ProductContext.Provider value={{ getProducts, setProducts ,fetchProducts}}>
            {children}
        </ProductContext.Provider>
    );
}

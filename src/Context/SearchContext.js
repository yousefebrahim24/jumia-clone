import React, { useState, createContext } from "react";
import axios from "axios";

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
    const [result, setResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState(null);

    async function searchBox(title) {
        try {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${title}`);
            setResult(response.data.products); 
            console.log(response.data.products);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <SearchContext.Provider value={{ result, searchBox , setSearchTerm ,searchTerm }}>
            {children}
        </SearchContext.Provider>
    );
}

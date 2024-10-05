import axios from "axios";
import React, { createContext, useState } from "react";
import {categoriesData} from './CategoryData'
export const CategoryContext = createContext()

export default function CategoryContextProvider({children}){
    const [categories , setCategories] = useState([])
    function fetchCategories(){
        setCategories(categoriesData);
    }
    return <CategoryContext.Provider value={{categories , setCategories , fetchCategories }}>
        {children}
    </CategoryContext.Provider>
}
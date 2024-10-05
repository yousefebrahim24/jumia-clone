import React from "react";
import HomePage from "./Home/HomePage";
import Category from "./Category/Category";
import AllProductSection from "./ProductSection/AllProducts";
import BottomSection from "./Officail";

export default function Home(){
    return(
    <>
        <HomePage />
        <Category />
        <AllProductSection/>
        <BottomSection />
    </>
    )
}
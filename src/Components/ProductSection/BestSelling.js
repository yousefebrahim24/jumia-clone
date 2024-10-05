import React from "react";
import Products from "./Products";
export default function BestSelling(){
    return(
        <div id="products" className="bg-light my-4">
            <div className="container py-3 px-1" >
                <h4>Top Best selling items</h4>
                <Products />
            </div>
        </div>
    )
}
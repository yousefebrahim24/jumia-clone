import React from "react";
import Products from "./Products";
export default function Stock(){
    return(
        <div id="products" className="bg-light my-4">
            <div className="container py-3" >
                <div id="stock-line" className="d-flex justify-content-between py-2 px-4 mx-1">
                    <h4 className=" ">Limited Stock Deals</h4>
                    <p>SEE ALL <i className="fa fa-arrow-right px-2" aria-hidden="true"></i></p>
                </div>
                <Products />
            </div>
        </div>
    )
}
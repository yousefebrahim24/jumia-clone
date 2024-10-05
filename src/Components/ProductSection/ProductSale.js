import React from "react";
import Products from "./Products";
import CountDown from "../CountDown";
export default function Sale(){
    return(
        <div id="products" className="bg-light my-4">
            <div className="container py-3" >
                <div id="sale-line" className="d-flex justify-content-between py-3 px-4 mx-1 bg-danger text-light">
                    <h4 className="">Flash Sale</h4>
                    <CountDown />
                    <p>SEE ALL <i className="fa fa-arrow-right px-2" aria-hidden="true"></i></p>
                </div>
                <Products />
            </div>
        </div>
    )
}
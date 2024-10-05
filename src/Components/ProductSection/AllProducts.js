import React from "react";
import BestSelling from "./BestSelling";
import Stock from "./Stock";
import Sale from "./ProductSale";
export default function AllProductSection(){
    return(
        <>
        <BestSelling />
        <Stock />
        <Sale />
        </>
    )
}
import React from "react";
import star from'../img/jumia-star-27004c64.png';
import { Link } from "react-router-dom";
import Images from "./Images";
export default function TopLine(){
    return(
    <div className='bg-light p-2' id="topLine">
    <div className="container d-flex justify-content-between" >
        <div className="d-flex ">
            <img src={star} alt="jumia logo" className="star-logo px-2"/>
            <a href="#">Sell on Jumia?</a>
        </div>
        <Images/>
    </div>
    </div>
    )
}
import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmptyCart(){
    const navigate = useNavigate();
    function homePage(){
        navigate('/')
    }
    return(
        <div className="container text-center p-4  d-flex flex-column justify-content-center align-items-center  w-100 m-auto" id="empty-cart">
            <img src=" https://www.jumia.com.ng/assets_he/images/cart.668e6453.svg" alt="Empty Cart" className="p-4"/>
            <h5>Your cart is empty!</h5>
            <p>Browse our categories and discover our best deals!</p>
            <button type="button" onClick={()=>homePage()}>Start Shopping</button>
        </div>   
    )
}
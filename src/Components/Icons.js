import React from "react";
import UserDown from "./DropDown";
import { useNavigate } from "react-router-dom";

export default function NavIcons(){
    const navigate = useNavigate();
    function cartPage(){
        navigate('/cart')
    }
    return(
        <div className="conrainer fs-4" id="nav-icons">
            <UserDown />
            <i className="fa fa-shopping-bag px-2" aria-hidden="true" onClick={()=>cartPage()}></i>
            <i className="fa fa-search px-2" aria-hidden="true"></i>
        </div>
    )
}
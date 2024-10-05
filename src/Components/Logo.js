import React from "react";
import logo from '../img/jumia-logo-ad7cc84f.png'; 
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className="container" id="logo">
            <Link to='/'><img src={logo} alt="logo" /></Link>
        </div>
    );
}

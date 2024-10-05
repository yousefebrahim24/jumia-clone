import React from "react";
import img1 from '../../img/JForce-868a721b.png';
import img2 from '../../img/official-store-d4edd54e.jpg';

export default function HomeImg() {
    return (
        <div className="home-img m-auto "> 
            <img src={img2} alt="Official Store" className="d-block" />
             <br />
            <img src='https://ng.jumia.is/cms/0-1-initiatives/jforce/2024/Untitled-3.gif' alt="JForce" className="d-block"/>   
        </div>
    );
}

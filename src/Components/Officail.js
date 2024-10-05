import React from "react";
import Slider from "react-slick";
import HomeSlider from "./Slider";
import BottomSlider from "./Slider";
export default function BottomSection(){
    return(
        <div id="BottomSection" className="bg-light my-5">
            <div className="container py-3" >
                <div className="offcial d-flex justify-content-center p-2 mx-1 ">
                    <h4 className="text-center">Official Store</h4>
                </div>
                <BottomSlider/>
            </div>
        </div>
    )
}
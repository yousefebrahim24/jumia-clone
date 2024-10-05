import React from "react";
import HomeLinks from "./HomeLinks";
import HomeImg from './HomeImg'
import HomeSlider from "./HomeSlider";
export default function HomePage(){
    return(
        <div id="home-page" className='bg-light py-4'>
            <div className='container d-flex p-3'>
                <HomeLinks />
                <HomeSlider />
                <HomeImg />
            </div>
        </div>
    )
}
import React from "react";
import Slider from "react-slick";
import slid2 from '../img/official-store-d4edd54e.jpg';
import slid3 from '../img/official-store-slider1-b73ed02b.jpg';
import slid4 from '../img/official-store-slider3-3d9f152e.jpg';
import slid5 from '../img/official-store-slider4-b953deef.jpg';
import slid6 from '../img/official-store-slider5-355c6d2f.png';
import slid7 from '../img/official-store-slider6-cb7d8570.jpg';
import slid8 from '../img/official-store-slider7-43b8a5b8.png';

export default function BottomSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  // Enable autoplay
        autoplaySpeed: 2000,  // Set autoplay speed (2 seconds)
    };

    return (
        <div className="container py-3" id="bottom-home-slider">
            <Slider {...settings}>
                <img src={slid8} alt="Home Slider Image 1" />
                <img src={slid2} alt="Home Slider Image 2" />
                <img src={slid3} alt="Home Slider Image 3" />
                <img src={slid4} alt="Home Slider Image 4" />
                <img src={slid5} alt="Home Slider Image 5" />
                <img src={slid6} alt="Home Slider Image 6" />
                <img src={slid7} alt="Home Slider Image 7" />
                <img src={slid8} alt="Home Slider Image 8" />
            </Slider>
        </div>
    );
}

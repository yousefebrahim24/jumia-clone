import React from "react";
import Slider from "react-slick";
import slid1 from '../../img/homepage-slider-1-01090fb9.png';
import slid2 from '../../img/homepage-slider-2-94c6563b.png';
import slid3 from '../../img/homepage-slider-3-bd463aea.jpg';
import slid4 from '../../img/homepage-slider-4-3d44bf6c.jpg';
import slid5 from '../../img/homepage-slider-5-557556c1.png';
import slid6 from '../../img/homepage-slider-6-adc18150.png';
import slid7 from '../../img/homepage-slider-7-17b2bd79.jpg';

export default function HomeSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  // Enable autoplay
        autoplaySpeed: 2000,  // Set autoplay speed (2 seconds)
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    
    return (
        <div className="container" id="home-slider">
            <Slider {...settings}>
                <img src={slid1} alt="Home Slider Image 1" />
                <img src={slid2} alt="Home Slider Image 2" />
                <img src={slid3} alt="Home Slider Image 3" />
                <img src={slid4} alt="Home Slider Image 4" />
                <img src={slid5} alt="Home Slider Image 5" />
                <img src={slid6} alt="Home Slider Image 6" />
                <img src={slid7} alt="Home Slider Image 7" />
            </Slider>
        </div>
    );
}

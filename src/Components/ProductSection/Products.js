import React, { useEffect, useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import LoadingIcon from "../Loading";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const { getProducts, fetchProducts } = useContext(ProductContext);
    const [isLoad, setLoad] = useState(true);
    const {addToCart} = useContext(CartContext)
    const navigate = useNavigate();
    function toProduct(id){
        navigate(`/products/${id}`)
    }

    useEffect(() => {
        fetchProducts(); 
    }, [fetchProducts]);

    useEffect(() => {
       if(getProducts.length >0){
        setLoad(false)
       }else{
        setLoad(true)
       }
    }, [getProducts]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024, // For tablets
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600, // For mobile devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480, // For very small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            {isLoad ? (
                <LoadingIcon />
            ) : (
                <div className="container" id="all-products">
                    <Slider {...settings}>
                        {getProducts.map((product) => (
                            <div className="px-1" key={product.id} onClick={()=>toProduct(product.id)}>
                                <div className="card m-auto position-relative">
                                    <img
                                        src={product.thumbnail}
                                        className="card-img-top w-100 bg-light p-2"
                                        alt={product.title}
                                    />
                                    <p className="rate p-1 fs-6 position-absolute top-0">
                                        {product.rating}
                                        <i className="fa fa-star text-warning px-1" aria-hidden="true"></i>
                                    </p>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">
                                            {product.title.split(' ').slice(0, 2).join(' ')}
                                        </h5>
                                        <p className="text-danger">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            )}
        </>
    );
}

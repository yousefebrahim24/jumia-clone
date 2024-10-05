import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingIcon from "../Loading";

export default function Product() {
    const [getProduct, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    async function fetchProduct(productId) {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://dummyjson.com/products/${productId}`);
            setProduct(response.data);
        } catch (err) {
            console.error(err); 
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct(id);
    }, [id]);

    return (
        <div id="product-page">
            {isLoading || getProduct === null? (
                <LoadingIcon />
            ) : (
            <div className="p-3">
                <div className="container d-flex justify-content-center  w-100 m-auto  gap-5 my-5" id="display-product">
                    <img src={getProduct.thumbnail}alt={getProduct.title} className="product-img bg-light"/>
                    <div className="info p-3">
                        <h4><b>{getProduct.title}</b></h4>
                        <h6 className="fs-5 py-2">{getProduct.description.split(' ').splice(0, 17).join(' ')} ...</h6>
                        <p className="fs-5">Product Code : {getProduct.sku}</p>
                        <p className="fs-5">Price:<b className="text-danger"> ${getProduct.price}</b></p>
                        <p className="fs-5">Category: {getProduct.category}</p>
                        <p className="fs-5">Rate: <i className="fa fa-star text-warning px-1" aria-hidden="true"></i>{getProduct.rating}</p>
                        <div className="tags d-flex gap-3">
                            {getProduct.tags.map((tag , index)=>(
                                <button type="button" class="btn btn-outline-dark" key={index}>{tag}</button>
                            ))}
                         </div>
                        
                    </div>
                </div>
                <div className="container my-5">
                    <h4 className="p-1">Hear from Our Customers</h4>
                    <div className="reviews my-4 d-flex justify-content-center">
                       {
                        getProduct.reviews.map((card , index) =>(
                            <div className="card p-4 fs-5 m-auto">
                                <h6><i className="fa fa-user-circle-o px-2" aria-hidden="true"></i>{card.reviewerName}</h6>
                                <h6><i className="fa fa-envelope px-2" aria-hidden="true"></i>{card.reviewerEmail}</h6>
                                <h6><i className="fa fa-star px-2" aria-hidden="true"></i>{card.rating}</h6>
                                <h6><i className="fa fa-commenting px-2" aria-hidden="true"></i><span className="fs-5">{card.comment}</span></h6>
                            </div>
                        ))
                       }
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

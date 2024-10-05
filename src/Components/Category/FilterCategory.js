import React, { useEffect, useState, useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LoadingIcon from "../Loading";
import { CartContext } from "../../Context/CartContext";
import { SearchContext } from "../../Context/SearchContext";

export default function FilterCategories() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoad, setLoad] = useState(true);
    
    const { categories, fetchCategories } = useContext(CategoryContext);
    const { name } = useParams(); // Get the category name from the URL
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();
    
    const { result, searchTerm } = useContext(SearchContext); // Use result from SearchContext for displaying search results

    // Navigate to product page
    function toProduct(id) {
        navigate(`/products/${id}`);
    }

    // Fetch products by category
    async function fetchFilteredProducts(categoryName) {
        try {
            const res = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
            setFilteredProducts(res.data.products);
        } catch (err) {
            console.error(err);
        }
    }

    // Fetch categories on mount
    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    // Fetch filtered products based on category name in the URL
    useEffect(() => {
        if (name) {
            fetchFilteredProducts(name);
        }
    }, [name]);

    // Set loading state based on category and filtered products
    useEffect(() => {
        if (categories.length > 0 && filteredProducts.length > 0) {
            setLoad(false);
        } else {
            setLoad(true);
        }
    }, [categories, filteredProducts]);

    return (
        <>
            {isLoad ? (
                <LoadingIcon />
            ) : (
                <div className="container my-4">
                    <h4>Browse Products by Category</h4>
                    <div className="m-auto py-4" id="display-products">
                        {result.length > 0  && searchTerm!==''? (
                            // Display search results if they exist
                            result.map((product) => (
                                <div className="card m-auto position-relative" key={product.id} onClick={() => toProduct(product.id)}>
                                    <img src={product.thumbnail} className="card-img-top w-100 bg-light p-2" alt={product.title} />
                                    <p className='rate p-1 fs-6 position-absolute'>{product.rating}<i className="fa fa-star text-warning px-1" aria-hidden="true"></i></p>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.title.split(' ').slice(0, 2).join(' ')}</h5>
                                        <p className='text-danger'>${product.price}</p>
                                        <button className="btn btn-dark" type="button" onClick={() => addToCart(product.id)}>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Display filtered products by category if no search results
                            filteredProducts.map((product) => (
                                <div className="card m-auto position-relative" key={product.id} onClick={() => toProduct(product.id)}>
                                    <img src={product.thumbnail} className="card-img-top w-100 bg-light p-2" alt={product.title} />
                                    <p className='rate p-1 fs-6 position-absolute'>{product.rating}<i className="fa fa-star text-warning px-1" aria-hidden="true"></i></p>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{product.title.split(' ').slice(0, 2).join(' ')}</h5>
                                        <p className='text-danger'>${product.price}</p>
                                        <button className="btn btn-dark" type="button" onClick={() => addToCart(product.id)}>
                                            Add To Cart
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

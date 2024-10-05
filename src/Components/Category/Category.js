import React, { useEffect, useContext, useState } from "react";
import { CategoryContext } from '../../Context/CategoryContext';
import LoadingIcon from "../Loading";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

export default function Category() {
    const { categories, fetchCategories } = useContext(CategoryContext);
    const [isLoad, setLoad] = useState(true);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    useEffect(() => {
        if (categories.length > 0) {
            setLoad(false);
        } else {
            setLoad(true);
        }
    }, [categories]);

    const navigate = useNavigate();

    return (
        <>
            {isLoad ? (
                <LoadingIcon />
            ) : (
                <div className="bg-light my-4" id="display-category">
                    <div  className="container py-5"> 
                        {categories.map((category, index) => (
                            <div key={index}
                              onClick={()=>{
                                navigate(`/category/${category.name}`)
                              }}
                              >
                                <div className="card m-auto p-1 bg-light" id="card-category">
                                      <img src={category.image} className="card-img-top w-100 bg-light p-1" alt="..."  />
                                      <h5 className="m-auto text-center">{category.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

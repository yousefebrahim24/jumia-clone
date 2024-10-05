import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import EmptyCart from "./Empty";

export default function CartPage() {
    // calculateProductlPrice product for each product
    const { cartProducts  , setCart , deleteProduct ,calculateProductPrice } = useContext(CartContext);
    
    return (
        <div id="cart-page">
            <div className="container">
                {cartProducts.length === 0 ? (
                    <EmptyCart />
                ) : (
                    <table className="table table-hover py-5 my-4">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Count</th>
                                <th>Discount</th>
                                <th>Total Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>
                                        <img src={product.thumbnail} alt={product.title} style={{ width: "50px", height: "50px" }} />
                                    </td>
                                    <td>{product.title}</td>
                                    <td>{product.category}</td>
                                    <td>{product.count}</td>
                                    <td>{product.discountPercentage}%</td>
                                    <td>{calculateProductPrice(product.price, product.count , product.discountPercentage).toFixed(1)} $</td>
                                    <td><button type="button" className="btn btn-danger" onClick={()=>deleteProduct(product.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import EmptyOrder from "./Empty";
export default function Order(){
    const {cartProducts , calculateTotalPrice} = useContext(CartContext)
    const shippingCost = 20.00; 
    const taxAmount = 2.00; 
    const totalPrice = calculateTotalPrice(shippingCost, taxAmount);
    return(
       <div id="order-page">
            <div className="container">
                {
                    cartProducts.length===0? <EmptyOrder /> : (
                        <div className="container p-4 d-flex flex-xl-column justify-content-center my-4" id="order-box">
                            <h4 className="text-center text-secondary  p-1 fw-bold">Order Summary Box</h4>
                            <hr />
                            <h5>Order Id :<b> #AB345</b></h5>
                            <h5>Total Number of Products: <b>{cartProducts.length} Items</b></h5>
                            <h5>Shipping Cost:<b className="text-danger"> ${shippingCost}</b></h5>
                            <h5>Tax Amount:<b className="text-danger"> ${taxAmount}</b></h5>
                            <h5>Total Price:<b className="text-danger"> ${totalPrice}</b></h5>
                            <h5>Payment Method:<b> Credit Card</b></h5>
                            <h5>Delivery Address:<b> 123 Main St, City, Country</b></h5>
                            <h5>Order Date:<b> October 4, 2024</b></h5>
                            <h5>Estimated Delivery Date:<b> October 10, 2024</b></h5>
                        </div>
                    )
                }
            </div>
       </div>
    )
}
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const savedCart = JSON.parse(localStorage.getItem('cartProducts'));
    const [cartProducts, setCart] = useState(savedCart || []);

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }, [cartProducts]);

    // Function to add a product to the cart
    async function addToCart(productId) {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${productId}`);
            const product = response.data;
            console.log(product); // Log the product when clicked

            // check if the product already exists
            const existingProduct = cartProducts.filter(item => item.id === product.id)[0];

            if (!existingProduct) {
                // If the product doesn't exist, add it with a count of 1
                setCart(prevCart => [...prevCart, { ...product, count: 1 }]); 
            } else {
                // If the product already exists, increase the count
                setCart(prevCart => 
                    prevCart.map(item => 
                        item.id === product.id ? { ...item, count: item.count + 1 } : item
                    )
                );
            }
        } catch (error) {
            console.error(error);
        }
    }
    // function to delete cart
    function deleteProduct(productId) {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    }
    // Calculate total price for each product
    const calculateProductPrice = (price, count, discount) => {
        // Calculate total price after applying discount
        return (price * count) * (1 - discount / 100);
    };

   // Function to calculate total price for the  cart with shipping and tax
   const calculateTotalPrice = (shipping, tax) => {
    // return all total price for cart products
    const subtotal = cartProducts.reduce((total, item) => {
        return total + calculateProductPrice(item.price, item.count, item.discount || 0);
    }, 0);

    return subtotal + shipping + tax; // Total = Subtotal + Shipping + Tax
    };
    return (
        <CartContext.Provider value={{ cartProducts, setCart, addToCart ,deleteProduct ,calculateProductPrice , calculateTotalPrice}}>
            {children}
        </CartContext.Provider>
    );
}

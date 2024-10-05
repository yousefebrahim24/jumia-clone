import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductContextProvider from './Context/ProductContext'; 
import CategoryContextProvider from './Context/CategoryContext'; 
import CartContextProvider from './Context/CartContext';
import SearchContextProvider from './Context/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.addEventListener("DOMContentLoaded", function(){
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.classList.add("lazy");
  });
})
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <CategoryContextProvider>
        <CartContextProvider>
          <SearchContextProvider>
              <App />
          </SearchContextProvider>
        </CartContextProvider>
      </CategoryContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);

reportWebVitals();

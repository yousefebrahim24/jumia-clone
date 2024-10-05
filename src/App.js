import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Landing';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import TopLine from './Components/Topbar';
import FilterCategories from './Components/Category/FilterCategory';
import CartPage from './Components/cart/Cart';
import Order from './Components/order/Order';
import Product from './Components/ProductSection/Product';


function App() {
  return (
    <div className="App">
      <Router>
        <TopLine />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:name' element={<FilterCategories />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/order' element={<Order/>} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

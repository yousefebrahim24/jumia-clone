
import React from "react";
import Logo from "./Logo";
import footerimg1 from '../img/download (1).svg';
import footerimg2 from '../img/download (2).svg'
import Media from "./Media";
export default function Footer() {
    return (
        <footer className="footer pt-5 text-dark bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="d-flex ">
                            <Logo />
                        </div>
                        <h5 className="py-2">Discover Your Style with ShopEase!</h5>
                        <p>We specialize in curating personalized shopping experiences, from trendy fashion to must-have gadgets.</p>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled " style={{ lineHeight: '30px' }}>
                            <li><a href="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Home</a></li>
                            <li><a href="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Products</a></li>
                            <li><a href="#" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Categories</a></li>
                            <li><a href="/cart" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Cart</a></li>
                            <li><a href="/order" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Orders</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 >Contact Us</h5>
                        <ul className="list-unstyled">
                            <p>Contact us today to start exploring the latest and exclusive deals.</p>
                            <li><i className="fa fa-shopping-bag px-1" aria-hidden="true"></i> 123 ShopEase St, City, State</li>
                            <li><i className="fa fa-phone px-1" aria-hidden="true"></i> +1 234 567 890</li>
                            <li><i className="fa fa-envelope px-1" aria-hidden="true"></i> info@ShopEase.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5>Follow Us</h5>
                        <p>Follow us on Social Media for shopping inspiration and exclusive deals!</p>
                        <Media />
                    </div>
                </div>
            </div>
            <div className="container" id="footer-img">
                <img src={footerimg1} />
                <img src={footerimg2} />
                <img src={footerimg1} />
                <img src={footerimg2} />
            </div>
        </footer>

    );
}
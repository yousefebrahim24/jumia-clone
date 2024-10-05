import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserDown() {
    const navigate = useNavigate();
    function orderPage(){
        navigate('/order')
    }
    return (
        <>
            <div className="btn-group">
                <i 
                    className="fa fa-user px-2 dropdown-toggle dropdown-toggle-split" 
                    aria-hidden="true" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false">
                </i>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            <button type="button" className="btn btn-primary mx-4">Sign In</button>
                        </a>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                        <a className="dropdown-item" href="#">
                            <i className="fa fa-user px-1 fs-5" aria-hidden="true"></i> My Account
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#"  onClick={()=>orderPage()}>
                            <i className="fa fa-shopping-bag px-1 fs-5" aria-hidden="true"></i> Orders
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            <i className="fa fa-heart px-1 fs-5" aria-hidden="true"></i> Saved Items
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

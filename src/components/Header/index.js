import React from "react";
import RouteNames from "../../router/routenames";
import "./header.css";


export default function Header() {
    // const navigate = useNavigate();
    return (
        <div className="header-container" >
            <div className="header-logo-box">
            <h1>FakeStore</h1>
            </div>
            <div className="icon-box">
                <img className="icon" src="./assets/shopping-cart.png"  alt="Cart-Icon" />
            </div>

        </div >
    );
}
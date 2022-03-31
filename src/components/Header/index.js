import React from "react";
import "./header.css";


export default function Header() {
    return (
        <div className="header-container" >
            <h1>FakeStore</h1>
            <div className="icon-box">
                <img className="icon" src="./shopping-cart.png" />
            </div>

        </div >
    );
}
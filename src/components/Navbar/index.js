import React from "react";
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navbar-container" >
            <ul className="navbar-ul" >
                <li className="navbar-li" ><a href="/all">All</a></li>
                <li className="navbar-li" ><a href="/electronics">Electronics</a></li>
                <li className="navbar-li" ><a href="/jewelery">Jewelery</a></li>
                <li className="navbar-li" ><a href="/men's clothing">Men's Clothing</a></li>
                <li className="navbar-li" ><a href="/women's clothing">Women's Clothing</a></li>
            </ul>
        </div>
    );
}
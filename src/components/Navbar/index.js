import React from "react";
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navbar-container" >
            <ul className="navbar-ul" >
                <li className="navbar-li" ><a href="default.asp">All</a></li>
                <li className="navbar-li" ><a href="news.asp">Electronics</a></li>
                <li className="navbar-li" ><a href="contact.asp">Jewelery</a></li>
                <li className="navbar-li" ><a href="about.asp">Men's Clothing</a></li>
                <li className="navbar-li" ><a href="about.asp">Women's Clothing</a></li>
            </ul>
        </div>
    );
}
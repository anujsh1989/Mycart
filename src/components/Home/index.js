import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import "./home.css"

export default function Home() {
    return (
        <div className="container" >
            <Header />
            <Navbar />
            <div className="wrapper" >
                <div className="img-wrapper" >
                    <img className="img" src="./logo192.png" ></img>
                </div>
                <div className="item-title" >
                    <h3>Test Item</h3>
                </div>
                <div className="item-price" >
                    <span>Price : $100.00</span>
                </div>
                <div className="btn" >
                    <h3 className="btn-text" >Add To Cart</h3>
                </div>
            </div>
            <Footer />
        </div>
    );
}
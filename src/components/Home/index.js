import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";
import "./home.css"

export default function Home() {

 const [cartdata,setCartData] = useState();
 const path = window.location.href.split("/").pop();
 


    useEffect(()=>{
        let url = `${"https://fakestoreapi.com/products"}${"/category/"}${path}`;
        if (path === "all") {
            url = "https://fakestoreapi.com/products"
        }
        if (path === "") {
            url = "https://fakestoreapi.com/products"
        }
        
        axios.get(url)
        .then((resp)=>{ 
        if (resp.status===200) {
            setCartData(resp.data);
        }
    })
        .catch((err)=> console.log(err))
    },[setCartData]);

    if (setCartData === null) {
        return(
            <h1>{"Loading..."}</h1>
        );
    }

    return (
        <div className="container" >
            <Header />
            <Navbar />
            <div className="content-wrapper" >
            {cartdata?.map((item)=>{
                return(
                <div key = {item.id}className="wrapper" >
                <div className="img-wrapper" >
                    <img className="img" src={item.image} alt="Item-Img" />
                </div>
                <div className="item-title" >
                    <h3>{item.title}</h3>
                </div>
                <div className="item-price" >
                    <span>{`${"$ "}${item.price}`}</span>
                </div>
                <div className="btn" >
                    <h3 className="btn-text" >Add To Cart</h3>
                </div>
            </div>
                );
            })}
            </div>
            <Footer />
        </div>
    );
}
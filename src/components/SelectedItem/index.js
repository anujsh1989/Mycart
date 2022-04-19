import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { useParams } from "react-router-dom";
import "./selecteditem.css";
import axios from "axios";

export default function SelectedItem() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
      if (resp.status === 200) {
        setProduct(resp.data);
      }
    });
  }, [id]);
  return (
    <div className="selected-item-container">
      <Header />
      <div className="selected-item-wrapper">
        <div className="item-image-box">
          <img className="item-image" src={product.image} alt="item-img"></img>
        </div>
        <div className="item-detail">
          <div className="price-tag">
            <h3>{`${"$ "}${product.price}`}</h3>
          </div>
          <h3 className="selected-item-title">{product.title}</h3>
          <p className="item-description">{product.description}</p>
          <p className="item-category">{product.category}</p>
          <div className="addcart-btn">Add To Cart</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

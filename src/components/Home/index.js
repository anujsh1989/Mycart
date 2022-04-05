import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./home.css";

export default function Home() {
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const [cartdata, setCartData] = useState();
  //  const path = window.location.href.split("/").pop();

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    if (category.length > 0 && category!=='all') {
        url = `${url}/category/${category}`
    }

    axios
      .get(url)
      .then((resp) => {
        if (resp.status === 200) {
          setCartData(resp.data);
        }
      })
      .catch((err) => console.log(err));
  }, [category]);

  if (cartdata === null) {
    return <h1>{"Loading..."}</h1>;
  }

  return (
    <div className="container">
      <Header />
      {/* <Navbar /> */}
      <div className="selection-bar">
        <FormControl className="formcontrol" variant="standard">
          <InputLabel className="inputlabel">Category</InputLabel>
          <Select value={category} label="Category" onChange={handleChange}>
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"jewelery"}>Jewelery</MenuItem>
            <MenuItem value={"electronics"}>Elecronics</MenuItem>
            <MenuItem value={"men's clothing"}>Men's Clothing</MenuItem>
            <MenuItem value={"women's clothing"}>Women's Clothing</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="content-wrapper">
        {cartdata?.map((item) => {
          return (
            <div key={item.id} className="wrapper">
              <div className="img-wrapper">
                <img className="img" src={item.image} alt="Item-Img" />
              </div>
              <div className="item-title">
                <h3>{item.title}</h3>
              </div>
              <div className="item-price">
                <span>{`${"$ "}${item.price}`}</span>
              </div>
              <div className="btn">
                <h3 className="btn-text">Add To Cart</h3>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

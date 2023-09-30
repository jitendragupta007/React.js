import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./mart.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = ({ setState, cartData, homepage, state }) => {
  
  const data = [
    { labels: "Category", value: "" },
    { labels: "Men's clothing", value: "men's clothing" },
    { labels: "Women's clothing", value: "women's clothing" },
    { labels: "Jewelery", value: "jewelery" },
    { labels: "Electronics", value: "electronics" },
  ];
  return (
    <div className="Navbar">
      <div className="navp1">
        <h2>Shopping</h2>
        <Link id="home" to="/">
          <h2 onClick={homepage}>Home</h2>
        </Link>
        <h2>Photo</h2>

        <div id="select1">
          <select
            id="select2"
            datatype={data}
            value={state}
            onChange={(e) => setState(e?.target?.value)}
          >
            {data?.map((element, index) => {
              return (
                <option key={index} value={element.value}>
                  {element?.labels}
                </option>
              );
            })}

            {/* { data.map((element)=>{

                return(

                  <option value={state} onChange={() => setState(element.title)}>


                )




               })
             } */}
            {/* <option value={state} onChange={() => setState("")}>
              Category
            </option>
            <option value={state} onChange={() => setState("women's clothing")}>
              Women's Clothing
            </option>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option> */}
          </select>
        </div>

        <Link id="cart" to="cart">
          <h2> <ShoppingCartIcon color="white" className="cartIcon"/>{cartData.length}</h2>
        </Link>
      </div>
      <div className="navp2">
        <h2>Contact Us</h2>
      </div>
    </div>
  );
};

export default NavBar;

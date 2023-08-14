import React, { useState } from "react";
import "../App.css";

const Card = ({
  img,
  title,
  price,
  reviews,
  setAddtoCartData,
  element,
  addtoCartData,
}) => {
  const addToCart = () => {
    let newdata = [...addtoCartData];
    newdata.push(element);
    setAddtoCartData(newdata);

    // console.log(element);
  };

  return (
    <div className="card">
      <img src={img} alt={title} />
      <div id="cardtext">
        <h4>{title}</h4>
        <h5>Price: {price}$</h5>
        <h6>Rating: {reviews?.rate}/5</h6>
        <div id="btn">
          <button onClick={addToCart} id="addToCart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

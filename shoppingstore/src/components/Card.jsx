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
  const addToCart = (id) => {
    let objectElement = {...element}
    if (addtoCartData?.length != 0) {
      const arr = addtoCartData?.findIndex((value) => {
        return value?.id == id;
      });
      if (arr > -1) {
        alert("Item is already in the cart");
      } else {
        objectElement['quantity'] = 1
        let newdata = [...addtoCartData];
        newdata.push(objectElement);
        setAddtoCartData(newdata);
      }
    } else {
      objectElement['quantity'] = 1
      let newdata = [...addtoCartData];
      newdata.push(objectElement);
      setAddtoCartData(newdata);
    }
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
          <button onClick={() => addToCart(element.id)} id="addToCart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

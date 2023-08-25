import React, { createContext, useState } from "react";
export const addToCartItem = createContext();


const SingleCard = ({ element, cartData, setCartData }) => {
  const { image, title, price, rating } = element;

  const NewaddToCart = (id) => {
    let objectElement = { ...element };
    if (cartData?.length != 0) {
      const arr = cartData?.findIndex((value) => { //find index finds the index/id of that perticular element                                             //which was  clicked. if it matches then it  returns true;
      return value?.id == id;                    //  finIndex is a HOF like map/reduce/filter..no need of forloop
      });                                       // cart length 0 nahi hai isliye sabki id check karega..warna else k baad
                                                // chala jata
   if (arr > -1) {
    alert("Item is already in the cart");
    //if able to find id then it will show alert
      } else {
        objectElement["quantity"] = 1;
        let newdata = [...cartData];
        newdata.push(objectElement);
        setCartData(newdata);
      }
     //else it will add the data to the cartData
    } else {
      objectElement["quantity"] = 1;
      let newdata = [...cartData];
      newdata.push(objectElement);
      setCartData(newdata);
    }
  };


  return (
    <addToCartItem.Provider value={{ cartData }}>
      <div className="card">
        <img src={image} alt={title} />
        <div id="cardtext">
          <h4>{title}</h4>
          <h5>Price: {price}$</h5>
          <h6>Rating: {rating.rate}/5</h6>
          <div id="btn">
            <button id="addToCart" onClick={() => NewaddToCart(element?.id)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </addToCartItem.Provider>
  );
};

export default SingleCard;

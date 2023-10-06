import React from "react";
import "../styles/Cart.css";
import { useDispatch } from "react-redux";
import { removeItem } from '../Utils/cartSlice';




const CartCard = ({imageId, price, item}) => {
  const UrlSwiggy = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`;
  
  const dispatch = useDispatch();
  const handleRemoveItem=(item) => {
  dispatch(removeItem(item))
  console.log("item removed")
  }

  return (
    <div id="cartCard">
      <div>
        <img id="restDataMenuImg" src={UrlSwiggy} alt="dish" />
        <h4>Price: {price}rs</h4>
      </div>
      <div className="quantitybtns">
        <button className="decreaseCart">-</button>1
        <button className="increaseCart">+</button>
      </div>

      <div>
        <button onClick={()=>handleRemoveItem(item)} className="removeBtn">Remove</button>
      </div>
    </div>
  );
};

export default CartCard;

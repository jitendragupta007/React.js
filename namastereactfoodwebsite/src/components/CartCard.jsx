import React from "react";
import "../styles/Cart.css";






const CartCard = ({imageId, price, item,id,incrementItem,decrementItem, handleRemoveItem}) => {

 
 
  console.log("item quantity:", item.info.quantity)
  const UrlSwiggy = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`;
  
 


  return (
    <div id="cartCard">
      <div>
        <img id="restDataMenuImg" src={UrlSwiggy} alt="dish" />
      </div>
      <div> <h4>{price}₹</h4></div>
      <div className="quantitybtns">
        <button onClick={()=>decrementItem(id)} className="decreaseCart">-</button>
              <h4>{item?.info?.quantity}</h4>
        <button onClick={()=>incrementItem(id)} className="increaseCart">+</button>
      </div>

      <div>
        <button onClick={()=>handleRemoveItem(id)} className="removeBtn">Remove</button>
      </div>
    </div>
  );
};

export default CartCard;

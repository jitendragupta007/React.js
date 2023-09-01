import React from "react";
import "./Cart.css";


const CartCards = ({
  removeCart,
 
  element,
}) => {
 
  

  return (
    <div key={element.id} id="mainCartDiv">
      <div>
        <img src={img} alt={title} />
      </div>
      <div>
        <h4>{title}</h4>
      </div>
      <div>
        <button>-</button>4<button>+</button>
      </div>
      <div>
        <h3>{price}$</h3>
      </div>

      <div id="remove">
        <button onClick={removeCart}>Remove</button>
      </div>
    </div>
  );
};

export default CartCards;

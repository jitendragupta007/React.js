import React from "react";
import CartCards from "./CartCards";
import "./Cart.css";

const Cart = ({ addtoCartData }) => {
  return (
    <div id="mainCart">
      {addtoCartData.map((element) => {
        return (
          <CartCards
            key={element.id}
            img={element?.image}
            title={element?.title}
            price={element?.price}
            reviews={element?.rating}
          />
        );
      })}
    </div>
  );
};

export default Cart;

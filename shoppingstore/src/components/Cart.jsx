import React from "react";
import CartCards from "./CartCards";
import "./Cart.css";

const Cart = ({ addtoCartData, removeCart }) => {
 
  return (
    <div id="mainCart">
      <div>
        <h1> Shopping Cart</h1>
        <p>
          {" "}
          You have <span id="countCart"> {addtoCartData.length}</span> items in
          the shopping cart
        </p>
      </div>

      {addtoCartData.map((element) => {
        return (
          <div>
            <div>
              <CartCards
                key={element.id}
                
                addtoCartData={addtoCartData}
                id={element.id}
                removeCart={() => removeCart(element.id)}
              />
            </div>
          </div>
        );
      })}
      <div>
        <h2>Cart Total: 50000$</h2>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import "../styles/Cart.css";
import { clearCart } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div id="mainCart">
      <div className="cartItems">
        {cartItems?.map((element) => {
          return (
            <CartCard
              key={element?.info?.id}
              imageId={element?.info?.cloudinaryImageId}
              price={element?.info?.feeDetails?.totalFee / 10}
              item={element}
            />
          );
        })}
      </div>
      <div className="cartValue">
        <h2>Total Cart Value is:</h2>
        <h4>100 rs</h4>
        <div>
          <button onClick={handleClearCart} className="removeBtn">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

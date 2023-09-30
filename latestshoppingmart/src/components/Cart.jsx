import React, { useContext, useReducer, useEffect } from "react";
import CartCard from "./CartCard";
import { CartContext } from "../App";
import { reducer } from "./reducer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = ({ setCartData }) => {
  const items = useContext(CartContext);
  const navigate = useNavigate();
  console.log("items", items.cartData);

  let products = items.cartData;

  if (products.length == 0) {
    navigate("/");
     // window.location.href = "/";
  }

  console.log("products", products);

  console.log(products);
  const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
  };

  console.log("initialState", initialState);

  //const [initialData, (for performing/triggering any action)]=[we will create reducer funtion. we will define dispatch actions here. ]

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state, "state");

  useEffect(() => {
    setCartData(state.item);
  }, [state]);

  // to delete indiv. elements form an item Cart.
  const removeItem = (id) => {
    toast.success("product removed successfully");
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  //clear the cart
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  //
  //increment the items
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  //decrement the items
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  //total items

  console.log("state on cartPage", state);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <div id="mainCart">
      <div>
        <h1> Shopping Cart</h1>
        <p>
          {" "}
          You have total <span id="countCart"> {state.totalItem}</span> items in
          the shopping cart.
        </p>
      </div>
      {state.item?.map((element) => {
        return (
          <div key={element.id}>
            <CartCard
              element={element}
              value={{ ...state }}
              removeItem={removeItem}
              id={element.id}
              increment={increment}
              decrement={decrement}
            />
          </div>
        );
      })}
      <div id="cartTotal">
        <h2>Cart Total: {state.totalAmount}$</h2>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;

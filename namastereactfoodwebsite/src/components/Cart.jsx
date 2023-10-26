import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import "../styles/Cart.css";
import { removeItem, clearCart, increment, decrement,cartTotal } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";


const Cart = () => {
 const dispatch = useDispatch();
 const cartItems = useSelector((store) => store.cart.items);
 const totalPrice = useSelector((store) => store.cart.totalPrice)
  
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem =(id) =>{
   return dispatch(removeItem(id));
  }

  const incrementItem =(id)=>{
    dispatch(increment(id))
  }

    const decrementItem =(id)=>{
    dispatch(decrement(id))
  }

  useEffect(()=>{
 dispatch(cartTotal())
},[dispatch,incrementItem,decrementItem])




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
              handleRemoveItem ={handleRemoveItem}
              id= {element?.info?.id}
              incrementItem ={incrementItem}
              decrementItem = {decrementItem}
              
            />
          );
        })}
      </div>
      <div className="cartValue">
        <h3 className="cartTags">Total Cart Value is</h3>
        <h4 className="cartTags">{totalPrice} Rs</h4>
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

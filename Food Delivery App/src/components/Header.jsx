import React from "react";
import "../styles/Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {toast} from "react-toastify"

const Header = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  //we are subscribing to the store
  // and we are telling that which part of store we want
  //it will be better instead of bringing all the store data
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    toast.success("Logged out Successfully.")
    navigate("/login");
  };

  const cartHandle =()=>{
if(!token){
  toast.warn("Login First")
  navigate("/login")
}

  }

  return (
    <div className="HeaderMain">
      <Link to="/">
        <div id="logo">
          <h1>Swigato</h1>
        </div>
      </Link>
      <div className="HeaderAtt">
        <NavLink to="/">
          {" "}
          <div>
            <h5>Home</h5>
          </div>
        </NavLink>
        <NavLink to="/offers">
          {" "}
          <div>
            <h5>Offers</h5>
          </div>
        </NavLink>
        <NavLink to="/help">
          {" "}
          <div>
            <h5>Help</h5>
          </div>
        </NavLink>
        
        <div className="cartBar" onClick={cartHandle}>
          <NavLink to="/cart">
            <h5>Cart({cartItems.length})</h5>
          </NavLink>
        </div>
        {!token && (
          <div >
            <NavLink to="/login">
              <h5>Log In</h5>
            </NavLink>
          </div>
        )}

        {token && (
          <div>
            <Link>
              <h5 onClick={handleLogout}>Log Out</h5>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

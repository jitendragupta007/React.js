import React from "react";
import "../styles/Header.css";
import { LogoUrl } from "../Utils/constant.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {


const onlineStatus = useOnlineStatus();

//we are subscribing to the store
// and we are telling that which part of store we want
//it will be better instead of bringing all the store data
 const cartItems = useSelector((store)=>store.cart.items )
 console.log("cartItems", cartItems)

  return (
    <div className="HeaderMain">
      <div className="logo">
        <img src={LogoUrl} alt="logo" />
      </div>

      <div className="HeaderAtt">
      <div><h5>
        OnlineStatus:{onlineStatus? "🟢" :"🔴"}
      </h5></div>
        <Link to="/">
          {" "}
          <div>
            <h5>Home</h5>
          </div>
        </Link>
        <Link to="/contact">
          {" "}
          <div>
            <h5>Contact Us</h5>
          </div>
        </Link>
        <Link to="/about">
          {" "}
          <div>
            <h5>About Us</h5>
          </div>
        </Link>
        <div>
         <Link to="/cart"><h5>Cart({cartItems.length})</h5></Link>
        </div>
        <div>
          <h5>Sign In</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;

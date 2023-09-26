import React from "react";
import "../styles/Header.css"
import {LogoUrl} from "../Utils/constant.js"

const Header = () => {
  return (
    <div className="HeaderMain">
      <div className="logo">
        <img
          src= {LogoUrl}
          alt="logo"
        />
      </div>

      <div className="HeaderAtt">
        <div>
          <h5>Home</h5>
        </div>
        <div>
          <h5>Contact Us</h5>
        </div>
        <div>
          <h5>About Us</h5>
        </div>
        <div>
          <h5>Cart</h5>
        </div>
        <div>
          <h5>Sign In</h5>
        </div>
      </div>
    </div>
  );
};

export default Header;

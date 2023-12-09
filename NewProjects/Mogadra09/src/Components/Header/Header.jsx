import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header_row">
        <div className="container">
          <Link to="/" className="logo">
            <img src="assets/images/common/logo.png" alt="" />
          </Link>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">My Booking</Link>
            </li>
            <li>
              <Link to="">About Us</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
          </ul>
          <div className="menu_icon">
            <img src="assets/images/common/menu.svg" alt="" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

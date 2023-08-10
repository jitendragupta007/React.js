import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "blue" : "white",
    };
  };

  return (
    <div className="Navbar">
      <NavLink style={navLinkStyles} className="Link1" to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} className="Link1" to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} className="Link1" to="/products">
        Products
      </NavLink>
      <NavLink style={navLinkStyles} className="Link1" to="/users">
        Users
      </NavLink>

    </div>
  );
};

export default Navbar;

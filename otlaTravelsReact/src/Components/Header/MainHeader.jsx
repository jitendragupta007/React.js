import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <section className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assets/images/common/logo.png" alt="" />
        </Link>
        <article className="header-right">
          <ul className="menu">
            <li>
              <Link to="/">Hotels</Link>
            </li>
            <li>
              <Link to="/">About Us </Link>
            </li>
            <li>
              <Link to="/">Contact </Link>
            </li>
          </ul>

          <div className="flag_icon">
            <span>
              USD <img src="/assets/images/common/flag.png" alt="" />
            </span>
          </div>

          <div className="language">
            <span>زبان</span>
          </div>

          <a href="" className="booking">
            my booking
          </a>
          <div className="login-singup">
            <a href="register.html"> sing up</a>/{" "}
            <a href="login.html">log in</a>
          </div>

          <div className="mobile_menu">
            <img src="/assets/images/common/menu.svg" alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default MainHeader;

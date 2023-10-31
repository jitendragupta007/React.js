import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header header-home">
        <div className="container">
          <div className="row flex-align">
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="logo">
                <Link to="/">
                  <img src="/images/logo.svg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="menu-toggle">
                <span></span>
              </div>
              <div className="menu_mobile">
                <Link to="/login" className="btn-small btn-outline">
                  Login
                </Link>
                <Link to="/signup" className="btn-small mx-3 ">
                  SignUp
                </Link>
                <Link to="/downloads" className="text-white text-xl">
                  Downloads
                </Link>
              </div>
              <div className="main-menu">
                <div className="nav-menu">
                  <ul>
                    <li>
                      <Link to="/" className="active">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/market" className="">
                        Market
                      </Link>
                    </li>
                    <li>
                      <Link to="/trade" className="">
                        Trade
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="">
                        Funds
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="connect-wallet">
                  <Link to="/login" className="btn-small btn-outline">
                    Login
                  </Link>
                  <Link to="/signup" className="btn-small mx-3 ">
                    SignUp
                  </Link>
                  <Link to="#" className="text-white text-xl">
                    Downloads
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

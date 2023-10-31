import React, { useState} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useProfile } from "../../Utils/profileDataContext";

const Header2 = () => {
  const [toggleStyle, setToggleStyle] = useState("none");
  const baseURL = "https://api.charlieexchange.co/";
  const {profileData} = useProfile();
  console.log("profileHeaderData", profileData);
  const navigate = useNavigate();
  
  const handleToggle = () => {
    toggleStyle === "none" ? setToggleStyle("block") : setToggleStyle("none");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };


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
              <div className="header-profile mob-profile">
                <a href="javascript:void(0)" className="profile-inr">
                  <img
                    className="creator"
                    src={baseURL+profileData.profilepicture}
                    alt="creator-7"
                  />
                </a>
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
                      <Link to="/funds" className="">
                        Funds
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleLogout} className="">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-profile" onClick={handleToggle}>
                  <a href="javascript:void(0)" className="profile-inr">
                    <img
                      className="creator"
                      src={baseURL+profileData.profilepicture}
                      alt="creator-7"
                    />
                    <p>
                      <span className="name">{profileData.firstName}</span>
                      <span className="price">{profileData.emailId} </span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-profile-content">
          <div className="container">
            <div className="header-profile-in" style={{ display: toggleStyle }}>
              <h5 className="heading">{profileData.firstName}</h5>
              <div className="copy-icon">
                <p className="desc"> {profileData.emailId}</p>
              </div>
              <hr />
              <div className="link-profile">
                <ul>
                  <li>
                    <NavLink to="/account">My Account</NavLink>
                  </li>
                  <li>
                    <NavLink to="/invite">Invite & Earn</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleLogout} to="/login">
                      Logout{" "}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header2;

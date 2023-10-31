import React from "react";
import { Link } from "react-router-dom";
import BannerSlider from "../Market/BannerSlider";

const HomeBanner = () => {
  return (
    <div>
      <section className="home-banner">
        <div className="container">
          <div className="row flex-align">
            <div className="col-md-12 col-lg-5 col-xl-5">
              <div className="home-banner-content">
                <div className="home-banner-title">
                  <h4 className="text-primary">Fast and Convenient</h4>
                  <h1 className="text-white">Cryptocurrency Exchange</h1>
                  <p className="banner-des">
                    {" "}
                    Fast and secure way to purchase or exchange 150+
                    cryptocurrencies{" "}
                  </p>
                </div>

                <div className="banner-btn">
                  <Link to="/login" className="btn">
                    Login
                  </Link>
                  <Link to="/signup" className="text-white ps-md-4">
                    Create Account
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-7 col-xl-7">
              <div className="home-banner-slider owl-carousel">
                <div className="artwork-box relative">
                  <div className="art-img">
                    <Link to="/">
                      <img src="images/banner_img.png" alt="home-img" />
                    </Link>
                  </div>
                </div>
                <div className="artwork-box relative">
                  <div className="art-img">
                    <Link to="/">
                      <img src="images/banner_img.png" alt="home-img" />
                    </Link>
                  </div>
                </div>
                <div className="artwork-box relative">
                  <div className="art-img">
                    <Link to="">
                      <img src="images/banner_img.png" alt="home-img" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BannerSlider />

      <section className=" ptb-70 pb-5">
        <div className="container">
          <div className="cycpt text-white">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="heading-part">
                  <h2>Create your cryptocurrency portfolio today</h2>
                  <p className="my-4">
                    Asian Exchange has a variety of features that make <br /> it
                    the best place to start trading
                  </p>
                  <Link to="/" className="btn px-5 ">
                    Start Trading Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-5 text-end ">
                <div className="cycpt_price">
                  <h2>650</h2>
                  <span>Market Pairs</span>
                </div>
                <div className="cycpt_price my-3">
                  <h2>127427.81 binance</h2>
                  <span>24H Volume</span>
                </div>
                <div className="cycpt_price">
                  <h2>150</h2>
                  <span>Countries Supported</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;

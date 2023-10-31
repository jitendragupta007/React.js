import React from 'react'
import { Link } from 'react-router-dom'

const BannerSlider = () => {
  return (
    <div>
     <section className="our-coin  relative">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="coin-slider owl-carousel">
                <div className="slide">
                  <div className="coin-img">
                    <img src="images/coins/binance.png" className="img-fluid" />
                  </div>
                  <div className="coin-box ">
                    <div className="coin-content">
                      <ul className="coin-date">
                        <li>Bitcoin</li>
                        <li>binance</li>
                      </ul>
                      <Link to="coinlist" className="box-title">
                        431.72
                      </Link>
                      <p className="coin-des ">Rate: 27.03946545</p>
                      <span className="tt_price text-danger">0.30761%</span>
                    </div>
                  </div>
                </div>

                <div className="slide">
                  <div className="coin-img">
                    <img src="images/coins/binance.png" className="img-fluid" />
                  </div>
                  <div className="coin-box ">
                    <div className="coin-content">
                      <ul className="coin-date">
                        <li>Bitcoin</li>
                        <li>binance</li>
                      </ul>
                      <Link to="coinlist" className="box-title">
                        431.72
                      </Link>
                      <p className="coin-des ">Rate: 27.03946545</p>
                      <span className="tt_price text-success">0.30761%</span>
                    </div>
                  </div>
                </div>

                <div className="slide">
                  <div className="coin-img">
                    <img src="images/coins/binance.png" className="img-fluid" />
                  </div>
                  <div className="coin-box ">
                    <div className="coin-content">
                      <ul className="coin-date">
                        <li>Bitcoin</li>
                        <li>binance</li>
                      </ul>
                      <Link to="coinlist" className="box-title">
                        431.72
                      </Link>
                      <p className="coin-des ">Rate: 27.03946545</p>
                      <span className="tt_price text-danger">0.30761%</span>
                    </div>
                  </div>
                </div>

                <div className="slide">
                  <div className="coin-img">
                    <img src="images/coins/binance.png" className="img-fluid" />
                  </div>
                  <div className="coin-box ">
                    <div className="coin-content">
                      <ul className="coin-date">
                        <li>Bitcoin</li>
                        <li>binance</li>
                      </ul>
                      <Link to="coinlist" className="box-title">
                        431.72
                      </Link>
                      <p className="coin-des ">Rate: 27.03946545</p>
                      <span className="tt_price text-success">0.30761%</span>
                    </div>
                  </div>
                </div>

                <div className="slide">
                  <div className="coin-img">
                    <img src="images/coins/binance.png" className="img-fluid" />
                  </div>
                  <div className="coin-box ">
                    <div className="coin-content">
                      <ul className="coin-date">
                        <li>Bitcoin</li>
                        <li>binance</li>
                      </ul>
                      <Link to="coinlist" className="box-title">
                        431.72
                      </Link>
                      <p className="coin-des ">Rate: 27.03946545</p>
                      <span className="tt_price text-danger">0.30761%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default BannerSlider

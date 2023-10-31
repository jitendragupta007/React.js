import React from "react";
import LiveAuctionTable from "../Body/LiveAuctionTable";
import BannerSlider from "./BannerSlider";

const Market = () => {
  return (
    <div>
      <div className="main">
        <section className="sub-page-banner sub-page-banner-space relative">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-banner  text-center">
                  <h1 className="sub-banner-title text-white">Markets</h1>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </section>

        <BannerSlider />

        <section className="mm-sec">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tab-content-part  ">
                  <div className="nav-tab">
                    <ul className="tab-link">
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="btn-small"
                          data-tab="tab-1"
                        >
                          {" "}
                          <i className="fa fa-star me-1"></i> Favourite
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0)"
                          className="btn-small active"
                          data-tab="tab-2"
                        >
                          Spot
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div className="tab-panel mt-3 " id="tab-1">
                      <LiveAuctionTable />
                    </div>
                    <div className="tab-panel active " id="tab-2">
                      <div className=" btn_radio_group my-3">
                        <button
                          type="button"
                          className="btn btn-sm  active"
                          for="ALL"
                        >
                          ALL
                        </button>
                        <button type="button" className="btn btn-sm " for="INR">
                          INR
                        </button>
                        <button type="button" className="btn btn-sm" for="ETH">
                          ETH
                        </button>
                        <button type="button" className="btn btn-sm" for="USDT">
                          USDT
                        </button>
                        <button type="button" className="btn btn-sm" for="BNB">
                          BNB
                        </button>
                        <button type="button" className="btn btn-sm" for="XRP">
                          XRP
                        </button>
                        <button type="button" className="btn btn-sm" for="USDC">
                          USDC
                        </button>
                        <button type="button" className="btn btn-sm" for="LTC">
                          LTC
                        </button>
                        <button type="button" className="btn btn-sm" for="EUR">
                          EUR
                        </button>
                      </div>
                      <LiveAuctionTable />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Market;

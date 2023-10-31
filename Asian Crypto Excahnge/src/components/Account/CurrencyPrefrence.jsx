import React from "react";

const CurrencyPrefrence = () => {
  return (
    <div className="col-lg-9 col-md-12 col-md-8">
      <div className="tab-content h-100" id="myTabContent"></div>
      <div
        className="tab-pane "
        id="CurrencyPill"
        role="tabpanel"
        aria-labelledby="Currency-pill"
      >
        <div className="upload-formate mb-5">
          <h3 className="mb-1">Currency Preference</h3>
          <p className="formate">
            Select your preferred display currency for all markets
          </p>
        </div>
        <div className=" row py-4">
          <div className="col-md-12 col-lg-8 m-auto">
            <div className="row">
              <div className="col-md-6">
                <label className="card-radio-btn mb-3">
                  <input
                    type="radio"
                    name="demo"
                    className="card-input-element d-none"
                    id="demo1"
                    checked=""
                  />
                  <div className="card card-body">
                    <img
                      src="/images/coins/tether.png"
                      className="img-fluid check_img"
                    />
                    <div className="content_head"> Tether USD (USDT)</div>
                  </div>
                </label>
              </div>
              <div className="col-md-6">
                <label className="card-radio-btn mb-3 ">
                  <input
                    type="radio"
                    name="demo"
                    className="card-input-element d-none "
                    value="demo2"
                  />
                  <div className="card card-body">
                    <img
                      src="/images/coins/bitcoin.png"
                      className="img-fluid check_img"
                    />
                    <div className="content_head">Bitcoin (BTC)</div>
                  </div>
                </label>
              </div>
              <div className="col-md-6">
                <label className="card-radio-btn mb-3">
                  <input
                    type="radio"
                    name="demo"
                    className="card-input-element d-none"
                    value="demo2"
                  />
                  <div className="card card-body">
                    <img
                      src="/images/coins/rupee.png"
                      className="img-fluid check_img"
                    />
                    <div className="content_head"> Rupee (INR)</div>
                  </div>
                </label>
              </div>
              <div className="col-md-6">
                <label className="card-radio-btn ">
                  <input
                    type="radio"
                    name="demo"
                    className="card-input-element d-none"
                    value="demo2"
                  />
                  <div className="card card-body">
                    <img
                      src="/images/coins/bnb.png"
                      className="img-fluid check_img"
                    />
                    <div className="content_head">BNB</div>
                  </div>
                </label>
              </div>
            </div>
            <button className=" mt-5 btn btn-gradient btn-medium justify-content-center w-100">
              <span> Save Currency Preference </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyPrefrence;

import React from "react";
import LiveAuctionTable from "./LiveAuctionTable";

const LiveAuction = () => {
  return (
    <div>
      <section className=" market_update pb-70">
        <div className="container">
          <div className="heading-part">
            <h2>Market Update</h2>
            <p className="mt-2 mb-3 text-primary">
              Cryptocurrency Portfolio Today
            </p>
          </div>
        </div>

        <div className="container">
          <div
            className=" btn_radio_group mb-4 "
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <button
              type="button"
              className="btn btn-outline-primary me-2 active"
              for=""
            >
              Spot
            </button>
            <button
              type="button"
              className="btn btn-outline-primary me-2 "
              for=""
            >
              Newly Listed
            </button>
            <button
              type="button"
              className="btn btn-outline-primary me-2 "
              for=""
            >
              Top Gainers
            </button>
          </div>
          <LiveAuctionTable />
        </div>
      </section>
    </div>
  );
};

export default LiveAuction;

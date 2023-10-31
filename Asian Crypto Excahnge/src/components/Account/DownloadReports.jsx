import React from "react";

const DownloadReports = () => {
  return (
    <div>
      <div
        className="tab-pane"
        id="down-reportPill"
        role="tabpanel"
        aria-labelledby="down-reportpill"
      >
        <div className="upload-formate mb-5 d-flex justify-content-between align-items-center">
          <div>
            <h3 className="mb-1">Download Reports</h3>
            <p className="formate mb-0">
              Get your trading report on your email.
            </p>
          </div>
        </div>
        <div className=" row py-4">
          <div className="col-md-12 col-lg-8 m-auto">
            <div className="form-field-wrapper-blue">
              <div className="field-box ">
                <select
                  id="inputGroupSelect01"
                  className="form-control form-select form-select-border mb-4"
                  name="tradingReport"
                >
                  <option value="Current Month">Current Month</option>
                  <option value="Last 30 Days">Last 30 Days</option>
                  <option value="Last 60 Days">Last 60 Days</option>
                  <option value="Last 90 Days">Last 90 Days</option>
                  <option value="Financial Year 2020-21">
                    Financial Year 2020-21
                  </option>
                  <option value="Financial Year 2021-22">
                    Financial Year 2021-22
                  </option>
                </select>
              </div>
              <span className="sc-gsTEea ffCUrw  mb-3 mt-2">
                From 01 May, 2022 to 25 May, 2022
              </span>
              <span color="rgb(72, 81, 86)" className="sc-gsTEea kvuTVX">
                The report will include:
              </span>
              <ul className="settings-section-body-list">
                <li>Exchange Trades</li>
                <li>Current Coin Balance</li>
                <li>Deposit and Withdrawals</li>
                <li>Ledger History</li>
                <li>Airdrops and other distributions</li>
              </ul>
              <button
                type="button"
                className="btn btn-gradient text-center  mt-3 w-100"
              >
                <span className="m-auto">Request Trading Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadReports;

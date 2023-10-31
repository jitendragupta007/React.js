import React from "react";
import AccountSideBar from "./AccountSideBar";
import { Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div>
      <div>
        <div className="main">
          <section className="sub-page-banner sub-page-banner-space relative">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-banner  text-center">
                    <h1 className="sub-banner-title text-white">
                      {" "}
                      Referral Program{" "}
                    </h1>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mm-sec funds_sec account_sec">
            <div className="container">
              <div className="row">
                <AccountSideBar />
                <div className="col-lg-9 col-md-12 col-md-8">
                  <div className="tab-content h-100" id="myTabContent">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Account;

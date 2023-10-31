import React from "react";

const InviteBody = () => {
  return (
    <div className="main">
      <section className="sub-page-banner sub-page-banner-space relative">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="page-banner  text-center">
                <h1 className="sub-banner-title text-white">
                  {" "}
                  Asian Exchange Referral Program{" "}
                </h1>
                <hr />
                <p className="text-white">
                  Refer & earn 50% of trading fee paid by your friends as
                  reward. Be your own Boss!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mm-sec funds_sec account_sec invite_sec logg_inn">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-12 col-md-8">
              <div className="row">
                <div className="form-field-wrapper  invite_card  ">
                  <div className="mainIN ">
                    <h5>
                      {" "}
                      <i className="fa fa-link"></i> Your referral link{" "}
                    </h5>
                    <form data-copy="true">
                      <input
                        type="text"
                        data-click-select-all="true"
                        defaultValue="http://yugdex.com/signup?reffcode=c1a3514f"
                      />
                      <button
                        type="button"
                        defaultValue="Copy"
                        className="btn btn-icon"
                      >
                        {" "}
                        <i className="fa fa-copy"></i>{" "}
                      </button>
                    </form>
                    <div className="share">
                      <a href="#" className="item-facebook">
                        <i className="fa fa-facebook"></i>{" "}
                      </a>
                      <a href="#" className="item-whatsapp">
                        {" "}
                        <i className="fa fa-whatsapp"></i>{" "}
                      </a>
                      <a href="#" className="item-telegram">
                        {" "}
                        <i className="fa fa-telegram"></i>
                      </a>
                      <a href="#" className="item-twitter">
                        <i className="fa fa-twitter"></i>{" "}
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="bl_card">
                        <img
                          src="images/download_1.png"
                          className="img-fluid"
                        />
                        <h3 className="">
                          <small>Total Referrals</small>0
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bl_card">
                        <img
                          src="images/download_2.png"
                          className="img-fluid"
                        />
                        <h3 className="">
                          <small>Total Rewards</small>0
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bl_card">
                        <img
                          src="images/download_3.png"
                          className="img-fluid"
                        />
                        <h3 className="">
                          <small>Your Reward Rate </small>30 %
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partnerx-section partnerx-hero">
        <div className="partnerx-hero-bullets">
          <ul className="partnerx-hero-bullets-list">
            <li className="partnerx-hero-bullets-list-item">
              <img
                src="images/50.png"
                alt="Bullet-1"
                className="partnerx-hero-bullets-list-item-image"
              />
              <span className="partnerx-hero-bullets-list-item-text">
                Earn 50% as reward of every trading fee
              </span>
            </li>
            <li className="partnerx-hero-bullets-list-item">
              <img
                src="images/cash-on-delivery.png"
                alt="Bullet-2"
                className="partnerx-hero-bullets-list-item-image"
              />
              <span className="partnerx-hero-bullets-list-item-text">
                Payout every 24 hours!
              </span>
            </li>
            <li className="partnerx-hero-bullets-list-item">
              <img
                src="images/bitcoin_1.png"
                alt="Bullet-3"
                className="partnerx-hero-bullets-list-item-image"
              />
              <span className="partnerx-hero-bullets-list-item-text">
                Unlimited referrals
              </span>
            </li>
            <li className="partnerx-hero-bullets-list-item">
              <img
                src="images/money.png"
                alt="Bullet-4"
                className="partnerx-hero-bullets-list-item-image"
              />
              <span className="partnerx-hero-bullets-list-item-text">
                Unlimited rewards
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>

  );
};

export default InviteBody;

import React from "react";
import HomeBanner from "./HomeBanner";
import LiveAuction from "./LiveAuction";
import FeaturedCreater from "./FeaturedCreater";
import HowItWorks1 from "./HowItWorks1";
import HowItWorks2 from "./HowItWorks2";

const Body = () => {
  return (
    <div className="main">
      <HomeBanner />
      <LiveAuction />
      <FeaturedCreater />
      <HowItWorks1 />
      <HowItWorks2 />
    </div>
  );
};

export default Body;

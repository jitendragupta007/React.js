import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import BannerBottom from "./BannerBottom/BannerBottom";
import PackageCategories from "./PackageCategories/PackageCategories";
import TopGroupTour from "./TopGroupTour/TopGroupTour";
import TrendingTravelArticles from "./TrendingTravelArticles/TrendingTravelArticles";
import GoTravelDiscover from "./GoTravelDiscover/GoTravelDiscover";


const Body = () => {

  return (
    <div>
      <Banner />
      <BannerBottom />
      <PackageCategories />
      <TopGroupTour />
      <TrendingTravelArticles />
      <GoTravelDiscover />
    </div>
  );
};

export default Body;

import React, { useState, useEffect } from "react";
import { useHomePage } from "../../../ContextStore/HomePageData";
import Child1TrendingTravelArticles from "./Child1TrendingTravelArticles";
import { Link } from "react-router-dom";

const TrendingTravelArticles = () => {
  const homeData = useHomePage();
  const [trendingTravel, setTrendingTravel] = useState([]);

  useEffect(() => {
    setTrendingTravel(homeData?.blogs);
  },[homeData]);
    
  console.log("trendingtravel", trendingTravel);
  return (
    <div>
      <section className="blog-section">
        <div className="container">
          <div className="common-heading">
            <strong className="big">Trending travel articles </strong>
          </div>
          <div className="allblogs">
            <Link  to="/">All Blogs </Link>
          </div>
          <ul>
            {trendingTravel?.map((element) => {
                return <Child1TrendingTravelArticles
                    key={element?.id} 
                    element={element}
              />;
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TrendingTravelArticles;

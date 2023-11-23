import React from "react";

const Child1TrendingTravelArticles = ({ element }) => {
    const ImgUrl = `https://vivantaholiday.com/tempimage/${element?.imageurl}`;
  return (
    <>
      <li>
        <a href=""></a>
        <figure>
          <img src={ImgUrl} alt="" />
        </figure>
        <div className="content">
                  <h3>{element?.meta_title }</h3>
        </div>
      </li>
    </>
  );
};

export default Child1TrendingTravelArticles;

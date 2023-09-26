import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import TopRated from "./TopRated";
import "../styles/Body.css";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [restInfo, setRestInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resList = await data.json();
    //console.log(resList);
    //const name = resList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name;
    setRestInfo(
      resList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log("stateRestInfo", restInfo);

  if(restInfo.length===0){
    return <ShimmerUi/>
  }

  //const name = restInfo?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name;
  //const imageId=restInfo?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.badgesV2?.cloudinaryImageId
  return (
    <>
      <div className="Body">
        <div className="Body1">
          <div>
            <SearchBar />
          </div>
          <div>
            <TopRated />
          </div>
        </div>

        <div className="Body2">



        {
          restInfo?.map((element) => {
        return <RestaurantCard
         key={element?.info?.id}
         name={element?.info?.name}
         imageId={element?.info?.cloudinaryImageId}
         cuisines={element?.info?.cuisines}
         avgRating={element?.info?.avgRating}
         costForTwo={element?.info?.costForTwo}
         areaName={element?.info?.areaName}
        

        />

    
        })
        }
        </div>
      </div>
    </>
  );
};

export default Body;

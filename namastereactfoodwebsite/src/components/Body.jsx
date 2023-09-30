import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import TopRated from "./TopRated";
import "../styles/Body.css";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

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
    console.log("APIdata", resList);
    console.log(resList);
    //const name = resList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name;
    setRestInfo(
      resList?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log("stateRestInfo", restInfo);

  //conditional rendering
  // if(restInfo.length === 0){
  //   return <ShimmerUi/>
  // }

  //const name = restInfo?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name;
  //const imageId=restInfo?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.badgesV2?.cloudinaryImageId

  const onlineStatus = useOnlineStatus();

if (onlineStatus===false){
  return  <h1 style={{marginTop:"110px",textAlign:"center"}}>It looks like you are offline!! Please check your internet connection!</h1>
}



  return restInfo.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="Body">
      <div className="bodyHeader">
      <h2>Restaurants with online food delivery in Jaipur</h2>
      </div>
        <div className="Body1">
          <div>
            <SearchBar restInfo={restInfo} setRestInfo={setRestInfo} />
          </div>
          <div id="topRated">
            <TopRated restInfo={restInfo} setRestInfo={setRestInfo} />
          </div>
        </div>

        <div className="Body2">
          {restInfo?.map((element) => {
            return (
              <Link
                key={element?.info?.id}
                to={"/restaurants/" + element?.info?.id}
              >
                {" "}
                <RestaurantCard
                  name={element?.info?.name}
                  imageId={element?.info?.cloudinaryImageId}
                  cuisines={element?.info?.cuisines}
                  avgRating={element?.info?.avgRating}
                  costForTwo={element?.info?.costForTwo}
                  areaName={element?.info?.areaName}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;

import React, { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import "../styles/RestroMenu.css";
import { useParams, Link } from "react-router-dom";

const RestroMenu = () => {
  const [resInfo, setRestInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

 
  console.log("params", resId);

  const fetchMenu = async () => {
    let data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const menuData = await data.json();
    console.log("MenuData:", menuData.data);
    setRestInfo(
      menuData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log("resInfoMenu", resInfo);
  if (resInfo?.length === 0) return <ShimmerUi />;

  const { name, cuisines, costForTwo, avgRating } = resInfo[0].info;

  return (
    <div className="restroMenu">
      <h3>{name}</h3>
      <p>{cuisines.join(",")}</p>
      <p>{costForTwo}</p>
      <h5>Ratings: {avgRating}⭐</h5>
    </div>
  );
};

export default RestroMenu;

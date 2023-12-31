import React, { useState, useEffect } from "react";
import "../styles/RestroMenu.css";
import { useParams } from "react-router-dom";
import RestMenuCard from "./RestMenuCard";
import Shimmer2 from "./Shimmer2";

const RestroMenu = () => {
  const [resInfo, setRestInfo] = useState([]);
  //const UrlSwiggy = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${}`
  console.log("resInfo", resInfo);
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

  if (resInfo && resInfo?.length == 0) return <Shimmer2 />;

  return (
    <div className="restroMenu">
      {resInfo?.map((element) => {
        return (
          <RestMenuCard
            key={element?.info?.id}
            imageId={element?.info?.cloudinaryImageId}
            price={element?.info?.feeDetails?.totalFee / 10}
            item={element}
            id={element?.info?.id}
          />
        );
      })}
    </div>
  );
};

export default RestroMenu;

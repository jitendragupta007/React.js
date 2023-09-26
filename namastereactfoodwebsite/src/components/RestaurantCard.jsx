import React from 'react'
import "../styles/Body.css"

const RestaurantCard = ({name,imageId,cuisines,avgRating,costForTwo, areaName}) => {

const UrlSwiggy = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`
  
return (
    <div className ="resCard">
     <img src={UrlSwiggy} alt="foodShop" />
      <h4>{name}</h4>
      <h6>{avgRating}⭐</h6>
      <p>{cuisines.join(", ")}</p>
      
      <h6>{costForTwo}</h6>

      <p>📍{ areaName}</p>
      
    </div>
  )
}

export default RestaurantCard

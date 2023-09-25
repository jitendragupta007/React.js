import React from 'react'
import "../styles/Body.css"

const RestaurantCard = () => {
  return (
    <div className ="resCard">
     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6dc3ed2ca21d71acff7c2a51dfe4c720" alt="foodShop" />
      <h4>Mc Donald's</h4>
      <p>Biryani, North Indian, Asian</p>
      <p>4.4 Starts</p>
      <p>38 Minutes</p>
    </div>
  )
}

export default RestaurantCard

import React from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import TopRated from "./TopRated";
import "../styles/Body.css"

const Body = () => {
  return (
    <>
  <div className="Body">
<div className="Body1">
  <div>
  <SearchBar/>
  </div>
 <div>
  <TopRated/>
 </div>
 </div>

<div className="Body2">
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>
<RestaurantCard/>

</div>





 </div>
  </>
  
  )
};

export default Body;

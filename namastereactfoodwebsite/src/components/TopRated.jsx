import React,{useState} from "react";
import "../styles/Body.css";

const TopRated = ({ setRestInfo, restInfo }) => {
const [btnChange, setbtnChange] =useState("TopRated");
const [AllData, setAllData]= useState(restInfo)



    
// we don't want return anything else from this function except filtered. 
//so we won't write return, filter is returning us 
//anywhere else.

  const topRated = () => {
    if(btnChange === "TopRated"){
  const filteredList = restInfo.filter((element) => {
  return element?.info?.avgRating > 4;
    });
    setRestInfo(filteredList);
    setbtnChange("All")
    console.log("filteredList", filteredList);
} else{
    setRestInfo(AllData);
    setbtnChange("TopRated");
}
  };

  return (
    <div className="TopRated">
      <button className="TopRatedFilter" onClick={topRated}>
       {btnChange}
      </button>
    </div>
  );
};

export default TopRated;

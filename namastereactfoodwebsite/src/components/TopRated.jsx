import React from "react"
import "../styles/Body.css"

const TopRated =()=>{
    return(
        <div className="TopRated">
        <button className="TopRatedFilter" onClick={()=>{console.log("Button Clicked")}}>TopRated</button>
        </div>
    )
}


export default TopRated;
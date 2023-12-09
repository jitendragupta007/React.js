import React from "react";
import TimeRangeSlider from "./TimeRangeSlider/TimeRangeSlider";

const TimingFilter = ({ setSelectedTotalTime, filteredData }) => {


  console.log("TimeRangeData", filteredData)
  return (
    <>
      <div className="filter_price">
        <h3>Time</h3>
        <div className="timings_box">
          <span>Timings: From DXB </span>
          <ul>
            <li>
              <img src="assets/images/home/1.png" alt="" />
              <small>00:00-12:00</small>
              <p>KWD 142.348</p>
            </li>
            <li>
              <img src="assets/images/home/2.png" alt="" />
              <small>12:00-17:00</small>
              <p>KWD 173.984</p>
            </li>
            <li>
              <img src="assets/images/home/4.png" alt="" />
              <small>17:00-23.59</small>
              <p>KWD 142.944</p>
            </li>
          </ul>
        </div>
        <div className="timings_box">
          <span>Timings: From DXB </span>
          <ul>
            <li>
              <img src="assets/images/home/1.png" alt="" />
              <small>00:00-12:00</small>
              <p>KWD 142.348</p>
            </li>
            <li>
              <img src="assets/images/home/2.png" alt="" />
              <small>12:00-17:00</small>
              <p>KWD 173.984</p>
            </li>
            <li>
              <img src="assets/images/home/4.png" alt="" />
              <small>17:00-23.59</small>
              <p>KWD 142.944</p>
            </li>
          </ul>
        </div>
        {
          filteredData?.Filter?.destination_filters?.map((element,index) => {
            return (
              <div key={index}>
              <h2>{element?.from}-{element?.to} </h2>
         <TimeRangeSlider title= {"DEPARTURE"} />
        <TimeRangeSlider title={"ARRIVAL "} />
        <TimeRangeSlider title={"JOURNEY DURATION"} setSelectedTotalTime={setSelectedTotalTime} filteredData={filteredData} unit={"(in hours)"} index={index} />
        </div>  

           ) 

          })
    }
        
      </div>
    </>
  );
};

export default TimingFilter;

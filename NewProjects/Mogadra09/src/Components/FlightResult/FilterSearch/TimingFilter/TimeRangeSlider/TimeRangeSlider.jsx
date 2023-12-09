import React, { useState, useEffect } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "./TimeRangeSlider.css";
const TimeRangeSlider = ({ title, setSelectedTotalTime, unit,index }) => {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(24);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const updatedRange = [minValue, maxValue,index];
 

  useEffect(() => {
    if (setSelectedTotalTime !== undefined) {
      setSelectedTotalTime(updatedRange);
    }
  }, [minValue, maxValue]);

  return (
    <div className="onward">
      <p>{title}{unit }</p>
      <div className="range_slider">
        <div className="App">
          <MultiRangeSlider
            min={0}
            max={24}
            step={3}
            minValue={minValue}
            maxValue={maxValue}
            onInput={(e) => {
              handleInput(e);
            }}
          />
        </div>

        <figure>
          <img src="assets/images/home/range.png" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default TimeRangeSlider;

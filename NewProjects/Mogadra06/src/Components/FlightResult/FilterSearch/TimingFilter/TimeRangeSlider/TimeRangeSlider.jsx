import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "./TimeRangeSlider.css";
const TimeRangeSlider = ({title}) => {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(24);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <div className="onward">
      <p>{title}</p>
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

import React from "react";

const Location = ({ element, selectedLocations, handleLocationChange }) => {
  const isChecked = selectedLocations.includes(element?.code);

  const handleCheckboxChange = () => {
    handleLocationChange(element?.code);
  };
console.log("isCheckedLocation", isChecked)
  return (
    <li>
      <label>
        <input
          type="checkbox"
          className="zonetype"
          checked ={isChecked}
          data-value={element?.code}
          onChange ={handleCheckboxChange}
        />
            {element?.text}<span className="checkspan"></span>
      </label>
    </li>
  );
};

export default Location;

import React from "react";

const BoardType = ({ element, selectedBoardTypes, handleBoardTypeChange }) => {
  const isChecked = selectedBoardTypes.includes(element?.code);

  const handleCheckboxChange = () => {
    handleBoardTypeChange(element?.code);
  };
  return (
    <li>
      <label>
        <input
         type="checkbox"
          className="mealtype"
          data-value={element?.code}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {element?.text}
        <span className="checkspan"></span>
      </label>
    </li>
  );
};

export default BoardType;

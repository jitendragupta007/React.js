import React from "react";

const ChildCheckBox = ({ element,handleBoardTypeChange,operatedBy }) => {
  const isChecked = operatedBy.includes(element?.Code);

  const handleCheckboxChange = () => {
    handleBoardTypeChange(element?.Code);
  };

  console.log("childCheck", element)
  return (
    <div className="form-group">
      <input
        type="checkbox"
        id="html"
        data-value={element?.Code}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label for="html">{element?.Value}</label>
    </div>
  );
};

export default ChildCheckBox;

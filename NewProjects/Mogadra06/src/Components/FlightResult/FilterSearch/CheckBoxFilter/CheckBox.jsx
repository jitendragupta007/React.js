import React from "react";
import ChildCheckBox from "./ChildCheckBox/ChildCheckBox";

const CheckBox = ({ title, Data, operatedBy, setOperatedBy }) => {
  const handleBoardTypeChange = (Code) => {
    const updatedSelectedBoardTypes = [...operatedBy];
    
    if (updatedSelectedBoardTypes.includes(Code)) {
      // If already selected, remove it
      updatedSelectedBoardTypes.splice(updatedSelectedBoardTypes.indexOf(Code), 1);
    } else {
      // If not selected, add it
      updatedSelectedBoardTypes.push(Code);
    }

    setOperatedBy(updatedSelectedBoardTypes);
  };



  return (
    <div className="filter_price">
      <h3>{title}</h3>
      {Data?.map((element,index) => {
        return <ChildCheckBox key={index} element={element}
          handleBoardTypeChange={handleBoardTypeChange}
          operatedBy={operatedBy}
         />;
       
      })}
    </div>
  );
};

export default CheckBox;

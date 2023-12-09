import React from "react";
import TimingFilter from "./TimingFilter/TimingFilter";
import CheckBox from "./CheckBoxFilter/CheckBox";
import CheckBoxStatic from "./StaticCheckBox/CheckBoxStatic";

const FilterSearch = ({
  filteredData,
  selectedFwdPaths,
  setSelectedFwdPaths,
  selectedRvrsePaths,
  setSelecetedRvrsePaths,
  operatedBy,
  setOperatedBy,
  setSelectedTotalTime,
}) => {

  
  console.log("forwardData", filteredData?.Filter?.destination_filters);

  const handleSelectedFwdPaths = (code, index) => {
    const updatedSelectedFwdPaths = [...selectedFwdPaths];
  
    // Check if the item is already selected
    const isSelected = updatedSelectedFwdPaths.some((item) => item.code === code && item.index === index);
  
    if (isSelected) {
      // If already selected, remove it
      const filteredPaths = updatedSelectedFwdPaths.filter((item) => !(item.code === code && item.index === index));
      setSelectedFwdPaths(filteredPaths);
    } else {
      // If not selected, add it
      updatedSelectedFwdPaths.push({ code, index });
      setSelectedFwdPaths(updatedSelectedFwdPaths);
    }
  };
  

  let isChecked;
  const handleCheckboxChange = (code, index) => {
    handleSelectedFwdPaths( code, index ) 
    isChecked =selectedFwdPaths.includes({code,index})
  };


  return (
    <div className="container">
      <div className="inner_root">
        <div className="title">Filter Search</div>

        <TimingFilter
          filteredData={filteredData}
          setSelectedTotalTime={setSelectedTotalTime}
        />

        {filteredData?.Filter?.destination_filters?.map((element, index) => {
          return (
            <CheckBoxStatic
              title={"Flight type"}
              Data={element}
              index={index}
              selectedFwdPaths={selectedFwdPaths}
              setSelectedFwdPaths={setSelectedFwdPaths}
              handleSelectedFwdPaths={handleSelectedFwdPaths}
              setSelecetedRvrsePaths={setSelecetedRvrsePaths}
              selectedRvrsePaths={selectedRvrsePaths}
              handleCheckboxChange={handleCheckboxChange}
              isChecked={isChecked}
            />
          );
        })}

        <CheckBox
          title={"Operated By"}
          Data={filteredData?.Filter?.Airline}
          operatedBy={operatedBy}
          setOperatedBy={setOperatedBy}
        />
      </div>
    </div>
  );
};

export default FilterSearch;

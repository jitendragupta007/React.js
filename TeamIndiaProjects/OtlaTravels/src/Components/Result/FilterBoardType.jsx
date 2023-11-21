import React from 'react'
import BoardType from './BoardType';

const FilterBoardType = ({ resultData,selectedBoardTypes,setSelectedBoardTypes }) => {
  
  console.log("boards", resultData?.Filter?.boards)

  const handleBoardTypeChange = (code) => {
    const updatedSelectedBoardTypes = [...selectedBoardTypes];
    
    if (updatedSelectedBoardTypes.includes(code)) {
      // If already selected, remove it
      updatedSelectedBoardTypes.splice(updatedSelectedBoardTypes.indexOf(code), 1);
    } else {
      // If not selected, add it
      updatedSelectedBoardTypes.push(code);
    }

    setSelectedBoardTypes(updatedSelectedBoardTypes);
  };




  return (
    <div className="filtertab">
    <div className="title newfiltertitle">Board Type</div>
    <ul className="mealtypelist">
      {resultData?.Filter?.boards?.map((element) => {
        return (
          <div key={element?.code}>
            <BoardType  element={element}
              selectedBoardTypes={selectedBoardTypes}
              handleBoardTypeChange={handleBoardTypeChange} />
            
          </div>
        );
      })}
    </ul>
  </div>

  )
}

export default FilterBoardType

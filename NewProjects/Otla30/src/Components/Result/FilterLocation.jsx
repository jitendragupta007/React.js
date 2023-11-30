import React from 'react'
import Location from './Location';

const FilterLocation = ({ resultData, selectedLocations, setSelectedLocations }) => {
  
  const handleLocationChange = (code) => {
    const updatedSelectedLocations = [...selectedLocations];
    
    if (updatedSelectedLocations.includes(code)) {
      // If already selected, remove it
      updatedSelectedLocations.splice(updatedSelectedLocations.indexOf(code), 1);
    } else {
      // If not selected, add it
      updatedSelectedLocations.push(code);
    }

    setSelectedLocations(updatedSelectedLocations);
  }; 




  return (
    <div className="filtertab">
              <div className="title newfiltertitle">Loction</div>
              <ul className="zonetypelist">
                {resultData?.Filter?.zones.map((element, index) => {
                  return (
                    <div key={index}>
                      <Location key={element?.code} element={element} 
                        handleLocationChange={handleLocationChange}
                        selectedLocations={selectedLocations}
                      />
                    </div>
                  );
                })}
              </ul>
            </div>
  )
}

export default FilterLocation

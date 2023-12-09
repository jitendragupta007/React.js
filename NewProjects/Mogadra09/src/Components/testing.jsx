import React from "react";

const FilteredResults = ({ data, selectedFwdPaths }) => {
  // Filter the data based on selectedFwdPaths
  const filteredData = data.Filter.destination_filters.filter((element, index) => {
    // Check if the current element matches any selected path in selectedFwdPaths
    return selectedFwdPaths.some((path) => path.code === element.code && path.index === index);
  });

  // Render the filtered results
  return (
    <div>
      <h2>Filtered Results</h2>
      <ul>
        {filteredData.map((element, index) => (
          <li key={index}>{`${element.from} - ${element.to}`}</li>
        ))}
      </ul>
    </div>
  );
};

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
  // ... (other parts of your FilterSearch component)

  return (
    <div className="container">
      <div className="inner_root">
        {/* ... (other parts of your FilterSearch component) */}
        
        {/* Display the filtered results */}
        <FilteredResults data={filteredData} selectedFwdPaths={selectedFwdPaths} />
      </div>
    </div>
  );
};

export default FilterSearch;

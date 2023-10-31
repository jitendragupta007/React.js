import React, { useState } from "react";
import "../styles/Body.css";
import { toast } from "react-toastify";

const SearchBar = ({ restInfo, setRestInfo }) => {
  const [searchText, setSearchText] = useState("");
  const [allData, setAllData] = useState(restInfo);

  const searchFilter = () => {
    const filterData = allData.filter((element) => {
      return element?.info?.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });

    if (filterData.length === 0) {
      toast.warn("This search is not available. Please try for another.");
      setRestInfo(allData);
      setSearchText("");
    } else {
      setRestInfo(filterData);
    }
  };


  const handlePress = (event) => {
    if (event.key == "Enter") {
      searchFilter();
    }
  };

  return (
    <div className="Search">
      <input
        type="text"
        onKeyPress={(e) => handlePress(e)}
        value={searchText} // We bound the input value to local state variable.
        onChange={(e) => {
          setSearchText(e.target.value);
        }} //it will show whatever we type. it's taking the value we type and providing to searchText.
      />
      <button onClick={searchFilter}>Search</button>
    </div>
  );
};

export default SearchBar;

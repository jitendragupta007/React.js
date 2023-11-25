import React, { useState, useEffect } from "react";
import { useResult } from "../../../Store/ResultStore";

const Shorting = ({ resultData, setResultData }) => {
  const [sortValue, setSortValue] = useState(1);

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData(resultData);
  }, [resultData]);



  const handleShorting = (e) => {
     setSortValue(e.target.value)
      const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const dataCol = optionElement.getAttribute("data-col");
    const dataSortType = optionElement.getAttribute("data-sort");
   

    let sortedData;
    if (resultData?.length === 0) {
      return;
    }
 if (dataSortType === "asc") {
    sortedData = [...resultData].sort((a, b) => (dataCol !=="hotelname" ? a[dataCol]-b[dataCol]: a[dataCol].localeCompare(b[dataCol])));
  } else {
    sortedData = [...resultData].sort((a, b) =>  (dataCol !=="hotelname" ? b[dataCol]-a[dataCol]: b[dataCol].localeCompare(a[dataCol])));
  }


    setResultData([...sortedData]);
  };


  return (
    <div className="">
      <div className="filter">
        <div className="filter-left"></div>
        <div className="filter-right">
          <div className="dropdown">
            <select id="sortby" value={sortValue} onChange={handleShorting}>
              <option value="1" data-col="hotelname" data-sort="asc">
                Name : A-Z
              </option>
              <option value="2" data-col="hotelname" data-sort="desc">
                Name : Z-A
              </option>
              <option value="3" data-col="price" data-sort="asc">
                Price : Low-High
              </option>
              <option value="4" data-col="price" data-sort="desc">
                Price : High-Low
              </option>
              <option value="5" data-col="review" data-sort="asc">
                Review : Low-High
              </option>
              <option value="6"  data-col="review" data-sort="desc">Review :High-Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorting;

import React, { useState, useEffect } from "react";
import { useResult } from "../../Store/ResultStore";
import HotelInfo from "./HotelInfo";
import Shorting from "./ShortingFilter/Shorting";
import { hotelResults } from "../../Utils/Auth";
import { useNavigate } from "react-router-dom";
import FilterStarRating from "./FilterStarRating";
import FilterPrice from "./FilterPrice";
import FilterSearch from "./FilterSearch";
import FilterBoardType from "./FilterBoardType";
import FilterLocation from "./FilterLocation";

const Result = () => {
  const { resultData, setResultData } = useResult();
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedStarRatings, setSelectedStarRatings] = useState([]);
  const [selectedBoardTypes, setSelectedBoardTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [filteredData, setFilteredData] = useState([])

  const searchToken = sessionStorage.getItem("searchToken");
  const navigate = useNavigate();

  console.log("selectedStarRatings", selectedStarRatings)
  const applyStarRatingFilter = (data, selectedStarRatings) => {
    return selectedStarRatings.length === 0
      ? data
      : data.filter(hotel => selectedStarRatings?.includes(Math.ceil(hotel.starrating)));
  };
  
  
  const applyBoardTypeFilter = (data, selectedBoardTypes) => {
    return selectedBoardTypes?.length === 0
      ? data
      : data?.filter(hotel => selectedBoardTypes?.some(type => hotel.roomcode.includes(type)));
  };

  console.log("selectedLocations", selectedLocations)
  const applyLocationFilter = (data, selectedLocations) => {
    return selectedLocations.length === 0
      ? data
      : data?.filter(hotel => selectedLocations?.some(location => hotel?.zonecode?.includes(location)));
  };
  
  

  useEffect(() => {
    getResultData();
  }, [searchToken,selectedBoardTypes, selectedLocations, selectedStarRatings]);

  const getResultData = async () => {
    const response = await hotelResults(searchToken);
    if (response.success) {
      try {
        console.log("ResponseResult", response.data);
         setResultData(response?.data)
        let filteredData = response?.data?.Data;
        filteredData = applyStarRatingFilter(filteredData, selectedStarRatings);
        filteredData = applyBoardTypeFilter(filteredData, selectedBoardTypes);
        filteredData = applyLocationFilter(filteredData, selectedLocations);


        console.log("filteredResultPageData", filteredData);
        setFilteredData(filteredData);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      if (response.message === "CALL_AGAIN") {
        getResultData();
      } else {
        console.log("responseErrorResult", response.message);
        navigate("/");
      }
    }
  };

  console.log("resultPageData", resultData);

  return (
    <section className="hotel-section">
      <div className="container">
        <h1 className="totalhotelfound"></h1>
        <div className="search-btn">Filter hotels</div>
        <div className="maindiv">
          <div className="left-div">
            <ul className="searchtype">
              <li className="active packtagetypee">Filter</li>
            </ul>

            <FilterSearch
              resultData={filteredData}
              setResultData={setFilteredData}
              
            />
            <FilterPrice
              selectedPrices={selectedPrices}
              setSelectedPrices={setSelectedPrices}
            />
            <FilterStarRating
              selectedStarRatings={selectedStarRatings}
              setSelectedStarRatings={setSelectedStarRatings}
            />
            <FilterBoardType
              selectedBoardTypes={selectedBoardTypes}
              resultData={resultData}
              setSelectedBoardTypes={setSelectedBoardTypes}
            />

            {/* <div className="filtertab" style={{ display: "block" }}>
              <div className="title newfiltertitle">Hotel Type</div>
              <ul className="hoteltypelist"></ul>
            </div> */}
            <FilterLocation
              resultData={resultData}
              selectedLocations={selectedLocations}
              setSelectedLocations={setSelectedLocations}
            />
          </div>

          <div className="right-div">
            
            <Shorting resultData={filteredData} setResultData={setFilteredData} />

            {filteredData?.map((element) => {
              return (
                <div key={element?.unique_id}>
                  <HotelInfo element={element} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;

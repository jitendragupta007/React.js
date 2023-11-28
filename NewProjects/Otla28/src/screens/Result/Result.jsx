import React, { useState, useEffect, useCallback } from "react";
import { useResult } from "../../Store/ResultStore";
import HotelInfo from "../../Components/Result/HotelInfo";
import Shorting from "../../Components/Result/ShortingFilter/Shorting";
import { hotelResults } from "../../Utils/Auth";
import { useNavigate } from "react-router-dom";
import FilterStarRating from "../../Components/Result/FilterStarRating";
import FilterPrice from "../../Components/Result/FilterPrice";
import FilterSearch from "../../Components/Result/FilterSearch";
import FilterBoardType from "../../Components/Result/FilterBoardType";
import FilterLocation from "../../Components/Result/FilterLocation";




const Result = () => {
  const { resultData, setResultData } = useResult();
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedStarRatings, setSelectedStarRatings] = useState([]);
  const [selectedBoardTypes, setSelectedBoardTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selected, setSelected] = useState("");
  const searchToken = sessionStorage.getItem("searchToken");
  const navigate = useNavigate();

  const applySelectedPricesFilter = useCallback((data, selectedPrices) => {
    const [minPrice, maxPrice] = selectedPrices;
  
    if (minPrice === 1 && maxPrice === 100) {
      return data;
    }
    return data.filter((element) => {
      const hotelPrice = (element?.net_price);
      return hotelPrice >= minPrice * 100 && hotelPrice <= maxPrice * 1000;
    });
  }, [selectedPrices])
  
  const applyStarRatingFilter = useCallback((data, selectedStarRatings) => {
    return selectedStarRatings.length === 0
      ? data
      : data.filter((hotel) =>
          selectedStarRatings?.includes(Math.ceil(hotel.starrating))
        );
  },[selectedStarRatings])

const applyBoardTypeFilter = useCallback((data, selectedBoardTypes) => {
    return selectedBoardTypes?.length === 0
      ? data
      : data?.filter((hotel) =>
          selectedBoardTypes?.some((type) => hotel.roomcode.includes(type))
        );
  },[selectedBoardTypes]);
  
const applyLocationFilter = useCallback((data, selectedLocations) => {
    return selectedLocations.length === 0
      ? data
      : data?.filter((hotel) =>
          selectedLocations?.some((location) =>
            hotel?.zonecode?.includes(location)
          )
        );
  },[selectedLocations]);
  

  useEffect(() => {
    
    getResultData();
  }, [searchToken, selectedBoardTypes, selectedLocations, selectedStarRatings, selectedPrices]);


  const getResultData = async () => {
    const response = await hotelResults(searchToken);
    console.log("searchTokenTest",searchToken)
    if (response.success) {
      try {
        setResultData(response?.data);
        let filteredData = response?.data?.Data;
        filteredData = applySelectedPricesFilter(filteredData, selectedPrices);
        filteredData = applyStarRatingFilter(filteredData, selectedStarRatings);
        filteredData = applyBoardTypeFilter(filteredData, selectedBoardTypes);
        filteredData = applyLocationFilter(filteredData, selectedLocations);
        filteredData = applySelectedPricesFilter(filteredData, selectedPrices);
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
              selected={selected}
              setSelected={setSelected}
              mainData={resultData}
              setMainData={setResultData}
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
            <Shorting
              resultData={filteredData}
              setResultData={setFilteredData}
            />

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

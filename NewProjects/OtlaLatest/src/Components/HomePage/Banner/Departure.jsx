import React, { useState, useEffect } from "react";
import { searchData } from "../../../Utils/Auth";

const Departure = ({ selected, setSelected }) => {
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    if (search.length <= 3) {
      setSearchedData([]);
    } else {
      fetchData();
    }
  }, [search]);

  const fetchData = async () => {
    try {
      const result = await searchData(search);
      console.log("result", result);
      setSearchedData(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const hotelFilter = searchedData?.filter((element) => {
      return (element?.searchtype).toLowerCase() === "hotel";
    });
    setHotelData(hotelFilter);

    const cityFilter = searchedData?.filter((element) => {
      return (element?.searchtype).toLowerCase() === "city";
    });
    setCityData(cityFilter);
  }, [searchedData]);

  const handleSelected = (element) => {
    setSelected({
      cityname: element?.cityname,
      code: element?.code,
      searchtype: element?.searchtype,
      cname: element?.cname,
      countryname:element?.countryname,
    });
    setSearch(element?.cname, element?.countryname);
  };

  console.log("search", search);
  console.log("selected", selected);
  console.log("cityData", cityData);
  console.log("hotelData", hotelData);
  console.log("searchedData", searchedData);

  return (
    <div className="input-group hotelsearch">
      <label> From</label>
      <input
        className="leaving"
        type="text"
        placeholder="Enter Departure Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <div className="searchboxdiv">
          {cityData?.map((element, index) => {
            return (
              <div
                className="seachlist"
                key={index}
                onClick={() => handleSelected(element)}
              >
                <ul className="citydata add_newlist">
                  <li>
                    <i className="fa fa-map-marker-alt"></i>
                    <b style={{ fontWeight: "600" }}>
                      {element?.cname},{element?.countryname}
                    </b>{" "}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Departure;

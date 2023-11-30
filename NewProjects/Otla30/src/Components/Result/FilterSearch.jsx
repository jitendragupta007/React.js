import React, { useState, useEffect } from "react";

const FilterSearch = ({ resultData, setResultData, mainData, setMainData,selected, setSelected}) => {
  const [nameSearch, setNameSearch] = useState("");
  const [allData, setAllData] = useState();
  const [display, setDisplay] = useState(true);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    setAllData(resultData);
  }, [resultData]);

  useEffect(() => {
    const hotelFilter = resultData?.filter((element) => {
    return element?.HotelCode === selected?.HotelCode
    })
    setResultData(hotelFilter)

},[selected])


  useEffect(() => {
    if (nameSearch === "") {
      setFilteredData([]);
      setResultData(mainData?.Data)
      return;
    }
    setSelected("")
    setResultData(mainData?.Data)
    const filterData = allData?.filter((element) => {
      return element?.hotelname
        .toLowerCase()
        .includes(nameSearch?.toLowerCase());
    });
    setFilteredData(filterData);
    setDisplay(true);
  }, [nameSearch]);

  const handleSelectedHotel = (element) => {
    setSelected(element);
    setDisplay(false);
  };

  console.log("filterSearchAllData", allData);
  console.log("filteredDatatoShow", filteredData);
 console.log("searchName", nameSearch);

  return (
    <div className="filtertab">
      <div className="title newfiltertitle">Hotel Name</div>
      <ul className="hotelnamefilter">
        <li>
          { !selected && <input
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
            type="text"
            id="hotelname"
            className="hotelfilterinput"
            placeholder="Search Hotel Name Here!"
          />
          }

          {selected && <input
            value={selected?.hotelname}
            onChange={(e) => setNameSearch(e.target.value)}
            type="text"
            id="hotelname"
            className="hotelfilterinput"
            placeholder="Search Hotel Name Here!"
          />
          }



          {display &&
            !selected &&
            filteredData?.map((element) => {
              return (
                <div key={element?.unique_id}>
                  <input
                    id="hdnhotelname"
                    style={{ cursor: "pointer" }}
                    defaultValue={element?.hotelname}
                    onClick={() => handleSelectedHotel(element)}
                  />
                </div>
              );
            })}

          <ul className="autocompletehotel">
            <li>Enter more than 3 characters</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default FilterSearch;
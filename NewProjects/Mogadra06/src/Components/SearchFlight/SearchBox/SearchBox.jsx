import React from "react";
import { searchAirport } from "../../../Utils/Auth/Auth";


const SearchBox = ({
  place,
  setPlace,
  setData,
  setShow,
}) => {
  const fetchData = async () => {
    if (place?.length <= 3) {
      setShow(false);
      setData([]);
      return;
    }
    try {
      const result = await searchAirport(place);
      console.log("result", result);
      setData(result);
      setShow(true);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSearch = (value) => {
    setPlace(value);
    fetchData();
  };

  return (
    <>
      <input
        type="text"
        placeholder=""
        checked
        value={place}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </>
  );
};

export default SearchBox;

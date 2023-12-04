import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../../Screens/MainPage/MainPage";
import SearchFlight from "../../Screens/SearchFlight/SearchFlight";
import FlightResults from "../../Screens/FlightResult/FlightResults";
import FlightDetails from "../../Screens/FlightDetails/FlightDetails";
 

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/searchflight" element={<SearchFlight />} />
      <Route path="/flightresults/:scValue" element={<FlightResults />} />
      <Route path="/flightdetails/:scValue/:offerid" element={<FlightDetails/>} />
    </Routes>
  );
};

export default Navigation;

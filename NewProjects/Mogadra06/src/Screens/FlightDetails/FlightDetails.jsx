import React, { useState, useEffect } from "react";
import SelectedFlightDetails from "../../Components/FlightDetails/SelectedFlightDetails/SelectedFlightDetails";
import PassengerDetails from "../../Components/FlightDetails/PassengerDetails/PassengerDetails";
import PaymentDetails from "../../Components/FlightDetails/PaymentDetails/PaymentDetails";
import { useParams } from "react-router-dom";
import { getDetails } from "../../Utils/Auth/Auth";

const FlightDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState([]);

  //getDetails

  useEffect(() => {
    fetchData();
  }, [params?.scValue, params?.offerid]);

  const fetchData = async () => {
    try {
      const resultData = await getDetails(params?.scValue, params?.offerid);
      console.log("ResultDetails", resultData);
      if (resultData?.success) {
        setDetails(resultData);
      } else {
        console.log("ResultError:", resultData?.error);
      }
    } catch (error) {
      console.log("CatchError", error);
    }
  };

  console.log("detailPageParams", params);
  return (
    <div>
      <section class="flightdetails_row">
        <h3>Selected Flight Details</h3>
        <SelectedFlightDetails />
        <PassengerDetails />
        <PaymentDetails />
      </section>
    </div>
  );
};

export default FlightDetails;

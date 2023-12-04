import React from "react";
import SelectedFlightDetails from "../../Components/FlightDetails/SelectedFlightDetails/SelectedFlightDetails";
import PassengerDetails from "../../Components/FlightDetails/PassengerDetails/PassengerDetails";
import PaymentDetails from "../../Components/FlightDetails/PaymentDetails/PaymentDetails";
import { useParams } from "react-router-dom";

const FlightDetails = () => {
    const params = useParams()

    console.log("paramsDetails",params)
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

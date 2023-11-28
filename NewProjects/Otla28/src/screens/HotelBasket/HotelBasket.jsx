import React,{useState, useEffect} from "react";
import StepBar from "../../Components/HotelBasket/StepBar/StepBar";
import PassengerDetails from "../../Components/HotelBasket/PassengerDetails/PassengerDetails";
import PassengerBasicDetails from "../../Components/HotelBasket/PassengerBasicDetails/PassengerBasicDetails";
import BasketHotelDetail from "../../Components/HotelBasket/BasketHotelDetailsj.jsx/BasketHotelDetail";
import SpecialRequest from "../../Components/HotelBasket/SpecialRequest/SpecialRequest";
import { Link } from "react-router-dom";

const HotelBasket = () => {
const [passengerDetails, setPassengerDetails] = useState({country :"", contact:"", email:""})

  console.log("passengerDetails", passengerDetails)
  
  return (
    <section className="basket_main_section">
      <div className="container">
        <StepBar />

        <div className="Passenger_info_main">
          <div className="left_panel_info">
            <PassengerDetails details={passengerDetails} setDetails={setPassengerDetails } />
            <PassengerBasicDetails />
            <PassengerBasicDetails />
            <SpecialRequest />
            <Link to="" className="proceed_button">
              Proceed
            </Link>
          </div>
          <BasketHotelDetail />
        </div>
      </div>
    </section>
  );
};

export default HotelBasket;

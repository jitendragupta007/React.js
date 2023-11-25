import React from "react";
import StepBar from "./StepBar/StepBar";
import PassengerDetails from "./PassengerDetails/PassengerDetails";
import PassengerBasicDetails from "./PassengerBasicDetails/PassengerBasicDetails";
import BasketHotelDetail from "./BasketHotelDetailsj.jsx/BasketHotelDetail";
import SpecialRequest from "./SpecialRequest/SpecialRequest";

const HotelBasket = () => {
  return (
    <section className="basket_main_section">
      <div className="container">
        <StepBar />

        <div className="Passenger_info_main">
          <div className="left_panel_info">
            <PassengerDetails />
            <PassengerBasicDetails />
            <PassengerBasicDetails />
            <SpecialRequest />
            <a href="index.html" className="proceed_button">
              Proceed
            </a>
          </div>
          <BasketHotelDetail />
        </div>
      </div>
    </section>
  );
};

export default HotelBasket;

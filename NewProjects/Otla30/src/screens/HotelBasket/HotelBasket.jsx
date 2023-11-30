import React, { useState, useEffect } from "react";
import StepBar from "../../Components/HotelBasket/StepBar/StepBar";
import PassengerDetails from "../../Components/HotelBasket/PassengerDetails/PassengerDetails";
import PassengerBasicDetails from "../../Components/HotelBasket/PassengerBasicDetails/PassengerBasicDetails";
import BasketHotelDetail from "../../Components/HotelBasket/BasketHotelDetailsj.jsx/BasketHotelDetail";
import SpecialRequest from "../../Components/HotelBasket/SpecialRequest/SpecialRequest";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getBasket } from "../../Utils/Auth";

const HotelBasket = () => {
  const [contactDetails, setContactDetails] = useState();
  const [textBox, setTextBox] = useState("");
  const [roomPaxDetails, setRoomPaxDetails] = useState("");
  const params = useParams();
  console.log("basketParams", params);
  console.log("roomPaxDetails",roomPaxDetails)

  useEffect(() => {
    getData();
  }, [params?.checkoutMessage]);

  const getData = async () => {
    try {
      const result = await getBasket(params.checkoutMessage);
      console.log("basketResult", result);
      console.log("getData", params.checkoutMessage);
      if (result?.success) {
        setRoomPaxDetails(result);
      } else {
        console.log("Error", result?.message);
      }
    } catch (error) {}
  };

  return (
    <section className="basket_main_section">
      <div className="container">
        <StepBar />

        <div className="Passenger_info_main">
          <div className="left_panel_info">
            <PassengerDetails
              contactDetails={contactDetails}
              setContactDetails={setContactDetails}
            />

            <PassengerBasicDetails />

            <SpecialRequest textBox={textBox} setTextBox={setTextBox} />
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

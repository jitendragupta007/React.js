import React,{useState} from "react";
import Rooms from "./RoomsList/Rooms";
import { useSelector } from "react-redux";

const RoomsAndPrices = () => {

const selectedRoomData = useSelector(
  (store) => store?.SelectedHotel?.data[0]
  );
  const roomData = selectedRoomData?.data?.roomlist[0].roomtype_list;

  return (
    <div id="tab-2" className="tab-content current">
      <div className="room_price_guest">
        <ul className="top_tab_btn">
          <li>1 x Room</li>
        </ul>

        <div className="hotel_deta_info">
          <div className="hotel_content_box">
            <div className="top_title">1 Room for 2 Adults</div>
            {roomData?.map((element, index) => {
              return (<Rooms key={index} element={element}
                 />
              )
            })}
          </div>
          <div className="right_row_section">
            <div className="hotel_booking_price">
              <div className="heading">
                <i className="fa fa-building"></i> Your Hotel
              </div>
              <p>Delmon Boutique Hotel</p>
              <div className="icons">
                <img src="assets/images/home/star.png" alt="" />
                <img src="assets/images/home/star.png" alt="" />
                <img src="assets/images/home/star.png" alt="" />
              </div>
              <p>Naif St .</p>
              <div className="heading">
                {" "}
                <i className="fa fa-fw fa-bed"></i> 1 Room for 2 Adults{" "}
              </div>
              <p>standard double or twin room ()</p>
              <ul>
                <li>
                  <span>Per Night</span> <strong>INR 2120.56</strong>{" "}
                </li>
                <li>
                  <span>Total</span> <strong> </strong>{" "}
                </li>
              </ul>

              <a href="hotel-basket.html" className="book_button">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsAndPrices;

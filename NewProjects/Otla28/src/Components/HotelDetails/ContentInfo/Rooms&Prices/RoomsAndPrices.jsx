import React,{useState} from "react";
import Rooms from "./RoomsList/Rooms";
import { useSelector } from "react-redux";

const RoomsAndPrices = () => {

const selectedRoomData = useSelector(
  (store) => store?.SelectedHotel?.data[0]
  );
  const roomData = selectedRoomData?.data?.roomlist[0].roomtype_list;

  const selectedRoom = useSelector(
    (store) => store?.SelectedRoom?.data[0]
  );
  
  let starArr = [];
  for (let i = 0; i < selectedRoomData?.data?.starrating; i++) {
    starArr.push("rating");
  }

 console.log("selectedRoom", selectedRoom)
 

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
              <p>{selectedRoomData?.data?.name}</p>
             <div className="icons">
                
              {starArr?.map((_, index) => {
              return (
                <img key={index} src="/assets/images/home/star.png" alt={`Star ${index + 1}`} />
              );
            })}
              </div>
              <p>{selectedRoomData?.data?.address}</p>
              <div className="heading">
                {" "}
                <i className="fa fa-fw fa-bed"></i> 1 Room for 2 Adults{" "}
              </div>
              <p>{selectedRoom?.roomType }({selectedRoom?.element?.boardName})</p>
              <ul>
                <li>
                  <span>Per Night</span> <strong>{selectedRoom?.element?.currency} { selectedRoom?.element?.price }</strong>{" "}
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

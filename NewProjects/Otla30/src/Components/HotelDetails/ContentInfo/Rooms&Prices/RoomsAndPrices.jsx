import React from "react";
import Rooms from "./RoomsList/Rooms";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkoutData } from "../../../../Utils/Auth";
import { toast } from "react-toastify";

const RoomsAndPrices = () => {
  const navigate = useNavigate();
  const selectedRoomData = useSelector(
    (store) => store?.SelectedHotel?.data[0]
  );
  const roomData = selectedRoomData?.data?.roomlist[0].roomtype_list;

  const selectedRoom = useSelector((store) => store?.SelectedRoom?.data[0]);
  const hotelId = selectedRoomData?.hotelid;
  const uniqueId = selectedRoom?.element?.uniqid;
  const detailToken = sessionStorage.getItem("detailToken");
  console.log("detailToken", detailToken);
  let starArr = [];
  for (let i = 0; i < selectedRoomData?.data?.starrating; i++) {
    starArr.push("rating");
  }

  console.log("selectedRoom", selectedRoom);
  console.log("roomData", selectedRoomData);
  

  const handleBookNow = async () => {
    console.log("checkoutResult");
    const result = await checkoutData(hotelId, detailToken, uniqueId);
    console.log("checkoutResult", result);
    if (result?.success) {
      try {
        console.log("resultmessage", result?.message);
        console.log("result", result);
        navigate(`/hotelbasket/${result?.message}`);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      console.log("messageError", result?.message);
      toast.error(result?.message);
    }
  };

  // // navigate("/hotelbasket",{state:{uniqueId:selectedRoom?.uniqid, searchToken:searchtoken, hotelid:selectedRoomData?.hotelid}} )

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
              return (
                <Rooms
                  key={index}
                  element={element}
                  firstElement={roomData[0]}
                />
              );
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
                    <img
                      key={index}
                      src="/assets/images/home/star.png"
                      alt={`Star ${index + 1}`}
                    />
                  );
                })}
              </div>
              <p>{selectedRoomData?.data?.address}</p>
              <div className="heading">
                {" "}
                <i className="fa fa-fw fa-bed"></i> 1 Room for 2 Adults{" "}
              </div>
              <p>
                {selectedRoom?.roomType}({selectedRoom?.element?.boardName})
              </p>
              <ul>
                <li>
                  <span>Per Night</span>{" "}
                  <strong>
                    {selectedRoom?.element?.currency}{" "}
                    {selectedRoom?.element?.price}
                  </strong>{" "}
                </li>
                <li>
                  <span>Total</span> <strong> </strong>{" "}
                </li>
              </ul>

              <a onClick={handleBookNow} className="book_button">
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

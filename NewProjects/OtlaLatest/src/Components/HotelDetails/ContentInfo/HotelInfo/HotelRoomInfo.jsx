import React from "react";
import { useSelector } from "react-redux";

const HotelRoomInfo = () => {
  const selectedRoomData = useSelector(
    (store) => store?.SelectedHotel?.data[0]
  );
  console.log("selectedroomdatacontentinfo", selectedRoomData);
  return (
    <div id="tab-1" className="tab-content">
      <div className="content_box">
        <div className="title">Description</div>
        <p>{selectedRoomData?.data?.description}</p>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/pin.svg" alt="" /> Location
        </div>
        <p>{selectedRoomData?.data?.Facility[0]?.data[1]?.title}</p>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/hotel-solid.svg" alt="" /> Hotel type
        </div>
        <p>{selectedRoomData?.data?.Facility[1].data[0]?.title}</p>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/credit-card-solid.svg" alt="" /> Methods
          of payment
        </div>
        <ul className="list_items_text">
        {selectedRoomData?.data?.Facility[2].data?.map((element) => {
            return <li>{element?.title}</li>;
          })}
        </ul>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/route-solid.svg" alt="" /> Distances (in
          meters)
        </div>
        <ul className="list_items_text">
        {selectedRoomData?.data?.Facility[3].data?.map((element) => {
            return <li>{element?.title}</li>;
          })}
        </ul>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/bed-solid.svg" alt="" /> Room facilities
          (Standard room)
        </div>
        <ul className="list_items_text">
        {selectedRoomData?.data?.Facility[4].data?.map((element) => {
            return <li>{element?.title}</li>;
          })}
        </ul>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/concierge-bell-solid.svg" alt="" />{" "}
          Facilities
        </div>
        <ul className="list_items_text">
          {selectedRoomData?.data?.Facility[5].data?.map((element) => {
            return <li>{element?.title}</li>;
          })}
        </ul>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/utensils-solid.svg" alt="" /> Catering
        </div>
        <ul className="list_items_text">
        {selectedRoomData?.data?.Facility[6].data?.map((element) => {
            return <li>{element?.title}</li>;
          })}
        </ul>
      </div>

      <div className="map_section">
        <div className="title">Map & Location</div>
        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=25.27602836,55.31295955&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          height="450"
          style={{ border: "0", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default HotelRoomInfo;

import React from 'react'

const HotelRoomInfo = () => {
  return (
    <div id="tab-1" className="tab-content">
      <div className="content_box">
        <div className="title">Description</div>
        <p>
          Delmon Boutique Hotel is located in Dubai in the Dubai Emirate region
          7 km from Grand Mosque and 9 km from Dubai World Trade CentreDelmon
          Boutique Hotel is a 3-star venue situated about 1 km from Bur Dubai
          Abra Dock.It features 24hour front desk-housekeeping service and
          newspaper service as well as storage for belongings-a safety deposit
          box and a lift.Guests can easily get to Dubai Deira Fish Souk which is
          approximately 1 km away.Shopping centres and boutiques are within easy
          reach of the accommodation. There are 125 guestrooms equipped with
          cable TV with on demand movies-a fridge- a dressing room-a writing
          table and a sofa- Bathrooms with a bathtub- a shower and guest
          toiletries are featured in every room-A huge variety of dishes is
          served in Ruths Chris Steak House and Metro which are 5 minutes walk
          away-The hotel is in a 20 minute walking distance from Salah Al Din
          subway station.
        </p>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/pin.svg" alt="" /> Location
        </div>
        <p>Total number of rooms : 125</p>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/hotel-solid.svg" alt="" /> Hotel type
        </div>
        <p>hotel</p>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/credit-card-solid.svg" alt="" /> Methods
          of payment
        </div>
        <ul className="list_items_text">
          <li>MasterCard</li>
          <li>Visa</li>
        </ul>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/route-solid.svg" alt="" /> Distances (in
          meters)
        </div>
        <ul className="list_items_text">
          <li>Bus/Train station : 900 meter</li>
          <li>Airport : 5300 meter</li>
        </ul>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/bed-solid.svg" alt="" /> Room facilities
          (Standard room)
        </div>
        <ul className="list_items_text">
          <li>Number of bedrooms : 1</li>
          <li>Bathroom : 1</li>
          <li>Disability-friendly bathroom</li>
          <li>Wi-fi</li>
          <li>Internet access</li>
          <li>TV</li>
          <li>Wheelchair-accessible</li>
          <li>Smoking rooms</li>
          <li>Extra beds on demand</li>
          <li>Cot on demand</li>
        </ul>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/concierge-bell-solid.svg" alt="" />{" "}
          Facilities
        </div>
        <ul className="list_items_text">
          <li>Wheelchair-accessible</li>
          <li>Car park</li>
          <li>24-hour reception</li>
          <li>Check-in hour : ( From :14:00:00)</li>
          <li>Check-out hour : ( From :12:00:00 To :12:00:00)</li>
          <li>Wi-fi : (Include Charges : )</li>
          <li>Room service : (Include Charges : )</li>
          <li>Laundry service : (Include Charges : )</li>
          <li>24-hour security : (Include Charges : )</li>
          <li>Bellboy service : (Include Charges : )</li>
          <li>Hotel safe</li>
          <li>Currency exchange facilities : (Include Charges : )</li>
          <li>Lift access</li>
          <li>Concierge</li>
          <li>Luggage room : (Include Charges : )</li>
          <li>Electric kettle</li>
        </ul>
      </div>

      <div className="content_box">
        <div className="title">
          <img src="assets/images/home/utensils-solid.svg" alt="" /> Catering
        </div>
        <ul className="list_items_text">
          <li>Bar : (Include Charges : )</li>
          <li>Restaurant</li>
          <li>Smoking area : (Include Charges : )</li>
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
  )
}

export default HotelRoomInfo

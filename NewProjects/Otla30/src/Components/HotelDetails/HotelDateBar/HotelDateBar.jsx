import React from 'react'
import { useSelector } from 'react-redux';

const HotelDateBar = () => {
  const selectedRoomData = useSelector(
    (store) => store?.SelectedHotel?.data[0]
  );
  return (
    <section className="hotel_date_bar">
    <div className="container">
        <span>Check-in :{selectedRoomData?.searchcriteria?.Checkin} | {selectedRoomData?.searchcriteria?.Checkout}</span>
        <span> <i className="fas fa-user"></i> {selectedRoomData?.searchcriteria?.totaladult+selectedRoomData?.searchcriteria?.totalchild } Passenger , {selectedRoomData?.searchcriteria?.roomlist?.length} Room</span>
    </div>
</section>
  )
}

export default HotelDateBar

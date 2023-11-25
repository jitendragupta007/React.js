import React, { useEffect } from 'react'
import BackBTNBar from './BackBTNBar/BackBTNBar'
import HotelDateBar from './HotelDateBar/HotelDateBar'
import IMGSlider from './IMGSlider/IMGSlider'
import ContentInfo from './ContentInfo/ContentInfo'
import { Outlet } from 'react-router-dom'
import {useSelector } from "react-redux";


const HotelDetails = () => {
  const selectedRoomData = useSelector((store) => store?.SelectedHotel?.data[0]);
  console.log("SliceSelectedRoomData", selectedRoomData)

  // useEffect(() => {
  //   dispatch(getHotelDetails(id))
  // },[])

  return (
    <div>
          <BackBTNBar selectedRoomData={selectedRoomData} />
          <HotelDateBar selectedRoomData={selectedRoomData} />
          <IMGSlider selectedRoomData={selectedRoomData} />
         <ContentInfo selectedRoomData={selectedRoomData } />
          <Outlet />
    </div>
  )
}

export default HotelDetails

import React from 'react'
import BackBTNBar from './BackBTNBar/BackBTNBar'
import HotelDateBar from './HotelDateBar/HotelDateBar'
import IMGSlider from './IMGSlider/IMGSlider'
import ContentInfo from './ContentInfo/ContentInfo'
import { Outlet } from 'react-router-dom'

const HotelDetails = () => {
  return (
    <div>
          <BackBTNBar />
          <HotelDateBar />
          <IMGSlider />
          <ContentInfo />
          <Outlet/>
    </div>
  )
}

export default HotelDetails

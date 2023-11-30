import React from 'react'
import Banner from '../../Components/HomePage/Banner/Banner'
import TravellersChoose from '../../Components/HomePage/TravellersChoose/TravellersChoose'
import Packages from '../../Components/HomePage/Packages/Packages'
import ExploreDeals from '../../Components/HomePage/ExploreDeals/ExploreDeals'
import HotelOffers from '../../Components/HomePage/HotelOffers/HotelOffers'
import GetDeals from '../../Components/HomePage/GetDeals/GetDeals'

const HomePage = () => {
  return (
    <div>
      <Banner />
      <TravellersChoose />
      <Packages />
      <ExploreDeals />
      <HotelOffers />
      <GetDeals/>
    </div>
  )
}

export default HomePage

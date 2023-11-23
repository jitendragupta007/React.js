import React from 'react'
import Banner from './Banner/Banner'
import TravellersChoose from './TravellersChoose/TravellersChoose'
import Packages from './Packages/Packages'
import ExploreDeals from './ExploreDeals/ExploreDeals'
import HotelOffers from './HotelOffers/HotelOffers'
import GetDeals from './GetDeals/GetDeals'

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

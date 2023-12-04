import React from 'react'
import { Link } from 'react-router-dom'

const SearchBtn = () => {
  return (
    <section className="flight_tabs">
    <div className="flight_middle"><Link to="/searchflight">Flight  <img src="assets/images/home/flight.png" alt=""/> </Link></div>
 </section>
  )
}

export default SearchBtn

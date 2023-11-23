import React from 'react'

const BasketHotelDetail = () => {
  return (
    <div className="right_panel">
    <div className="flightdetails">
        <h4 className="title"> <i className="fas fa-hotel"></i> &nbsp;Hotel Detail</h4>
        <div className="hoteldetails">

            <figure>
                 <img src="assets/images/home/hotel-detail.jpg" alt=""/>
            </figure>
            <div className="hotelbasicinfo">

                <div className="name_starrating">
                    <h4>Delmon Boutique Hotel</h4>
                    <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </span>
                </div>
                <div className="address">
                    <p>Naif St .</p>
                </div>

                    <div className="rooms_selected">
                        <h4>Room 1</h4>
                        <p><i className="fa fa-bed"></i> standard double or twin room</p>
                        <span><i className="fa fa-user"></i> 2 Pax (2A)</span>
                    </div>

                <div className="totalamount">
                    <span>Total</span>
                    <p>INR 2674.73</p>
                </div>

            </div>


        </div>


    </div>

   
        <div className="auto_timeing flightdetails ">
            <span id="countdown">09:25</span>
        </div>
     
</div>
  )
}

export default BasketHotelDetail

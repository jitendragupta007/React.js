import React from 'react'

const HotelInfo = ({ element }) => {
  

    const ImgUrl = `https://photos.hotelbeds.com/giata/bigger/${element?.image}`

  return (
    <div id="hotelresult">
      <div className="booking-room"> <div className="left-side"><figure><img src={ImgUrl} /> </figure><div className="right"> <h2> {element?.hotelname} <small className="reviewhotel">{element?.review}</small></h2><label>
        
        <img src="/assets/images/home/star.png" />  <img src="/assets/images/home/star.png" />  <img src="/assets/images/home/star.png" />  <img src="/assets/images/home/star1.png" />  <img src="/assets/images/home/star1.png" />
      
  
      
      
      </label> <div className="c1"> <img src="../assets/images/home/map.svg" />  <p>{element?.address}</p></div>  </div></div><div className="right-side"><label>From<br /> <strong>USD {element?.net_price}</strong><br /> <small>per night USD {element?.price}</small> </label> <div className="choose-btn"> <a href="/hotel/detail?hotelid=110174&amp;sc=ee869ffa-6bfe-4504-b8aa-fcfde43a9c9a&amp;supp=HB&amp;package=standard" className="selectroom">Choose Room</a> </div></div>
    
    </div>


</div>
  )
}

export default HotelInfo

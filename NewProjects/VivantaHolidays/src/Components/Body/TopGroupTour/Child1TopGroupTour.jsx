import React from 'react'
import { Link } from 'react-router-dom'

const Child1TopGroupTour = ({ element }) => {

    const ImgUrl = `https://vivantaholiday.com/tempimage/${element?.mainimage}`
    
  return (
      <>
           <div className="swiper-slide">
                <div href="" className="insetbox">
                  <figure>
                    <img
                      src={ImgUrl}
                      alt="Best Selling"
                    />
                  </figure>
                  <div className="content">
                      <h2>{element.title}</h2>
                      <p>{element?.managefight[0]?.departure?.code}-{element?.managefight[0]?.arrival?.code}</p>
                    <div className="per-price">
                          {(element?.flightinclude === 1)  &&
                              <em>
                                  <img src="assets/images/home/plane.svg" alt="" /> Main
                                  Flight Included{" "}
                              </em>
                              
                          }
                      <div className="right">
                              <strong>₹{element?.packagecost }</strong>
                        <small>per person</small>
                      </div>
                    </div>
                      
        
                    <div className="date-month">
                      <ul>
                              <li>{element?.flightdate}</li>
                      </ul>
                      <div className="call-buttonrow">
                              <Link to="/"          className="callnow">
                          Call Now
                        </Link>
                        <Link to="tourdetails" className="view">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
    </>
  )
}

export default Child1TopGroupTour

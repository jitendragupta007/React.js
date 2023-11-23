import React from 'react'

const Hotel = () => {
  return (
    <div>
      <section className="hotel-listing">
        <div className="container">
          <aside className="hotel-list-left">
            <div className="select-box">
              <select><option>Your Search</option></select>
            </div>
            <div className="heading"> <i className="fas fa-filter"></i> filter your search </div>
            <div className="packeges-list-box">
              <div className="title"> Packege Type </div>
 
              <div className="form-group">
               <input type="checkbox" id="html"/>
               <label for="html">Go Solo</label>
             </div>
 
             <div className="form-group">
               <input type="checkbox" id="html1"/>
               <label for="html1">Travel buddy</label>
             </div>
 
             <div className="form-group">
               <input type="checkbox" id="html2"/>
               <label for="html2">Travu Trybe</label>
             </div>
 
             <div className="form-group">
               <input type="checkbox" id="html3"/>
               <label for="html3">destination weddings </label>
             </div>
 
             <div className="form-group">
               <input type="checkbox" id="html4"/>
               <label for="html4">The travel gang</label>
             </div>
 
            </div>
          </aside>
 
          <div className="hotel-details-right">
            <div className="select-sorting">
              <select><option>Select To Sorting</option></select>
            </div>
            <div className="hotel-all-detail">
              <div className="hotel-content-info">
                <div className="left">
                  <div className="heading"> Steigenberger Pyramids Cairo
                   <div className="icons">
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                   </div>   
                 </div>
                 <span> Alexandria Road, Pyramids, Giza, 45345 Cairo, Egypt</span>
 
                 <div className="heading"> Jaz Mirabel Resort
                   <div className="icons">
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                   </div>   
                 </div>
                 <span> Nabq Bay, Sharm El Sheikh, Egypt</span>
                </div>
 
                <div className="right">
                   <span> CHRISTMAS IN EGYPT- LA FAMILIA ONLY</span>
                   <strong>TALE OF 2 CITIES SERIES</strong>
                   <span>LA FAMILIA</span>
                </div>
              </div>
 
              <div className="hotel-book-detail">
               <div className="hotel-book-img">
                 <figure><img src="assets/images/listing/tour-book.jpg" alt=""/></figure>
                 <div className="booking-text">
                    <div className="inner-content">
                      <div className="left">
                        <strong>₦3,250,000.00 </strong>
                        <span>Total Price <i className="fa fa-info-circle"></i> </span>
                      </div>
                      <div className="right">
                        <strong>₦1,000,000.00</strong>
                        <label>(minimum deposit required before 30-09-2021)</label>
                      </div>
                    </div>
                    <div className="share-booking">
                      <small>Share</small>
                      <div className="share-icon">
                        <a href=""><i className="fas fa-envelope"></i></a>
                        <a href=""><i className="fab fa-twitter"></i></a>
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                      </div>
                    </div>
                 </div>
               </div>
               <div className="hotel-available-service">
                 <ul>
                   <li> <i className="fas fa-plane-departure"></i> <strong>Lagos : </strong> Economy className Return Ticket on Egypt Air</li>
                   <li> <i className="fas fa-calendar-alt"></i>  20-Dec-2021   -   23-Dec-2021</li>
                   <li> <i className="fas fa-bed"></i>2 Nights ,   All Inclusive <br/> <strong>Room Type:</strong> Standard Room</li>
                   <li> <i className="fas fa-car"></i>  Airport Transfer</li>
                   <li> <i className="fas fa-briefcase"></i>   23*2 / 7kg hand luggage Luggage Allowance</li>
                   <li> <i className="fab fa-cc-visa"></i>   Inclusive of Visa Fee</li>
                 </ul>
                 <div className="view_detail-button">
                   <a href="" className="view_btn"> view detail</a>
                   <a href="" className="terms"> Terms and condition</a>
                 </div>
               </div>
             </div>
 
            </div>
 
        
 
          </div>
 
        </div>
      </section>
    </div>
  )
}

export default Hotel

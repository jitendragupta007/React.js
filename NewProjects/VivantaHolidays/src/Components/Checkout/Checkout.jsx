import React from 'react'

const Checkout = () => {
  return (
    <div>
        <section className="tours-all-details ">
      <div className="container"> 
        <div className="details-heading in_spacing">
          <div className="title"> CHRISTMAS IN EGYPT- LA FAMILIA ONLY</div>
          <span><i className="fas fa-map-marker-alt"></i>   Alexandria Road, Pyramids, Giza, 45345 Cairo, Egypt</span>
        </div> 

        <div className="checkout-page-details">
           <div className="checkout-left-box">
             <figure><img src="assets/images/checkout/img.jpg" alt=""/></figure>
             <div className="hotel-available-service hotel-next-info">
               <ul>
                 <li> <i className="fas fa-plane-departure"></i> <strong>Lagos : </strong> Economy className Return Ticket on Egypt Air </li>
                 <li> <i className="fas fa-calendar-alt"></i>   20-Dec-2021   -   23-Dec-2021</li> 
                 <li> <i className="fas fa-bed"></i> 9 Nights , Bed and Breakfast <br/> <strong>Room:</strong>  Double Bed</li>
                 <li> <i className="fas fa-briefcase"></i>  23*2 / 7kg hand luggage Luggage Allowance</li>
                 <li> <i className="fab fa-cc-visa"></i> Inclusive of Visa Fee</li> 
               </ul>   
             </div>
           </div>
           <div className="checkout-pricing-box">
             <div className="title">Cost Breakdown</div>
             <div className="text"> <span>Price</span> <strong>₦3250000.00</strong></div>
             <div className="text border_bottom"> <span> Minimum Deposit Required <em>(Before 30-09-2021 )</em> </span> <strong>₦1000000.00</strong></div>
             <div className="text total_price"> <span> Total Price</span> <strong>₦3250000.00</strong> </div>
             <div className="trems-text"><a href="">Terms and condition</a></div>
           </div>
        </div>


        <div className="checkout-form-box">
          <div className="title">Name should appear as written on your international passport.</div>
          <div className="form-control">
          <div className="input-box mr_select"> <select><option> Mr. </option></select> </div>
          <div className="input-box in_width"><input type="text" placeholder="First name"/></div>
          <div className="input-box in_width"><input type="text" placeholder="middle name"/></div>
          <div className="input-box in_width"><input type="text" placeholder="last name"/></div>
          <div className="input-box"><input type="date" placeholder="Date Of Birth e.g.DD/MM/YYYY"/></div>
          <div className="input-box"> <select><option>Select Gender </option></select> </div>
          <div className="input-box"><input type="text" placeholder="Email ID"/></div>
          <div className="input-box"><input type="text" placeholder="Contact No."/></div>
          <div className="input-box grid_wrap"> <select><option>--Select Country-</option></select> </div>
          <div className="input-box grid_wrap"> <select><option>--Select City-- </option></select> </div>
          <div className="input-box grid_wrap"><input type="text" placeholder="Nationality (as shown on your international passport)"/></div>
          <div className="input-box grid_wrap"> <label>Adults </label> <select><option>Select</option></select> </div>
          <div className="input-box grid_wrap"> <label>Children </label> <select><option>Select</option></select> </div>
          <div className="input-box grid_wrap"> <label> Children </label> <select><option>Select </option></select> </div>
          <div className="input-box full_width"><input type="text" placeholder="Address"/></div>
         </div>

        </div>

        <div className="payment-deposit-info">
           <div className="payment-deposit-box">
             <div className="radio-button">
               <label> <input type="radio"/>  Make Initial Deposit to secure your space (Before 30-09-2021 )</label>
               <strong>₦1000000.00</strong>
               <p> Please Note: 1.5% + 100 will added to your initial deposit as card charges e.g. ₦100,000 + ₦1,500 + 100 =₦101,600</p>
             </div>
           </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Checkout

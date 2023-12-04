import React from 'react'

const PaymentDetails = () => {
  return (
    <div>
         <section className="payment_section">
                <div className="container">
                    <h2>Payment</h2>
                    <div className="flex_box">
                        <div className="left_row">
                            <div className="inner-box">
                                 <div className="visa_button">
                                    <input type="radio" id="test1" name="radio-group" checked=""/>
                                    <label for="test1"> <img src="assets/images/k.png" alt=""/></label>
                                 </div>
        
                                 <div className="visa_button">
                                    <input type="radio" id="test2" name="radio-group" checked=""/>
                                    <label for="test2"><img src="assets/images/visa.png" alt=""/></label>
                                    <span>credit/gcc atm card</span>
                                 </div>
                            </div>
        
                            <div className="payment_checkbox">
                                <div className="form-group">
                                    <input type="checkbox" id="html"/>
                                    <label for="html">Lorem ipsum dolor sit amet consectetur adipisicing elit.   <a href="abcd"> Terms and Conditions</a></label>
                                </div>
                            </div>
        
                        </div>
                        <div className="right_row">
                            <div className="title">Fare Summary</div>
                            <p>
                                <span>Cabin/className</span>
                                <span>Economy className</span>
                            </p>
        
                             <p>
                                <strong>Total Price</strong>
                                <label> <sup>KWD</sup> 143.456</label>
                                 
                             </p>
        
                            <button>Pay Now</button>
                            <figure><img src="assets/images/lock.png" alt=""/></figure>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default PaymentDetails

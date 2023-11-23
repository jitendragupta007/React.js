import React from 'react'

const ContactBody = () => {
  return (
    <section className="contact-us-section">
    <div className="container">
      <div className="heading">Contact With Us</div>
      <div className="text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</div>
      <ul>
        <li>
          <i className="fas fa-map-marker-alt"></i> 
          <div className="title">Address</div>
          <p> Lorem ipsum, Dolor sit amet, consecteti Ur adipiscing, Vestibulum - 123456789</p>
        </li>
        <li>
         <i className="fas fa-phone"></i>
         <div className="title">Contact No.</div>
         <p> 1800 920 3233</p>
       </li>
       <li>
         <i className="fa fa-envelope"></i> 
         <div className="title">Email Address</div>
         <p>  support@flightcorps.com</p>
       </li>
      </ul>
      <div className="content-form-box">
 
        <div className="right-form">
         <div className="inner-form">
           <input type="text" placeholder="Name"/>
           <input type="text" placeholder="Email"/>
           <input type="text" placeholder="Phone Number"/>
           <input type="text" placeholder="Subject"/>
           <textarea placeholder="Your Comment"></textarea>
         </div>
         <button>Submit Now</button>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default ContactBody

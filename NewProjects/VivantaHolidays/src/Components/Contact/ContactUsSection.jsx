import React from 'react'

const ContactUsSection = () => {
  return (
    <div>
      <section className="contact-us-section">
        <div className="container">
          <div className="heading">Contact With Us</div>
          <div className="text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.</div>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> 
              <div className="title">Address</div>
              <p> 128 Curtis Ferry, New York, USA</p>
            </li>
            <li>
             <i className="fas fa-phone"></i>
             <div className="title">Contact No.</div>
             <p> +123-456-7890</p>
           </li>
           <li>
             <i className="fa fa-envelope"></i> 
             <div className="title">Email Address</div>
             <p> info@yourcompany.com</p>
           </li>
          </ul>
          <div className="content-form-box">
            <figure><img src="assets/images/home/contact.png" alt=""/></figure>
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
    </div>
  )
}

export default ContactUsSection

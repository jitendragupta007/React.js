import React from 'react'

const ContactBanner = () => {
  return (
    <div>
       <section className="new-banner about-us-banner">
        <div className="banner-slider">
          <img src="assets/images/home/aboutus-banner.jpg" alt=""/>
        </div>
        <div className="container">
          <div className="banner-content-box">
           <div className="heading">Contact Us </div>
           <ul>
             <li><a href="index-new.html">Home</a></li>
             <li>Contact Us</li>
           </ul>
           </div>
        </div>
      </section>
    </div>
  )
}

export default ContactBanner
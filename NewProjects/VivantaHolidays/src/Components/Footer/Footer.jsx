import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
       <footer className="footer">
            <div className="container">
                <div className="footer-left">
                    <a href="index.html" className="footer-logo"> <img src="assets/images/common/logo.png" alt="logo" /></a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</p>
                    <div className="social-icons">
                        <span>Follow Us</span>
                        <div className="icon">
                            <a href=""><img src="assets/images/common/facebook.svg" alt="Facebook" /></a>
                            <a href=""><img src="assets/images/common/twitter.svg" alt="Twitter" /></a>
                            <a href=""><img src="assets/images/common/instagram.svg" alt="Instagram" /></a>
                            <a href=""><img src="assets/images/common/youtube.svg" alt="Youtube" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-middle">
                    <div className="heading">about us</div>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><a href="">Terms and Conditions </a></li>
                        <li><a href="">Privacy & Policy </a></li>
                    </ul>
                </div>
                <div className="footer-middle">
                    <div className="heading">support</div>
                    <ul>
                        <li><a href="">Customer Support</a></li>
                        <li><a href="">Privacy & Policy </a></li>
                        <li><a href="">Contact Channels </a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <div className="heading">Save time, save money!</div>
                    <div className="footer-input-box">
                        <label>Sign up and we'll send the best deals to you</label>
                        <input type="text" placeholder="Your Email Address" />
                        <button className="footer-button">subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
    <footer className="footer relative">
            <div className="container">
                <div className="footer-content pt-100 pb-70">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer-logo  ">
                                <Link to="/"><img src="/images/logo.png" alt="logo"/></Link>
                                <ul className="footer-social"> 
                                    <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer-box    ">
                                <h3 className="footer-title">Explore</h3>
                                <ul className="footer-link"> 
                                    <li><Link to="xyz">About Us </Link></li>
                                    <li><Link to="xyz">Privacy Policy </Link></li>
                                    <li><Link to="xyz">Terms Of Use </Link></li>
                                    <li><Link to="xyz">KYC Policy </Link></li>
                                    <li><Link to="xyz">AML Policy </Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer-box   delay-2">
                                <h3 className="footer-title">Navigation</h3>
                                <ul className="footer-link"> 
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="xyz">support@yugcoins.io</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer-box   delay-3 " id="downloads">
                                <h3 className="footer-title">Downloads</h3>
                                <div className="down_tab">
                                    <div>
                                      <Link to="#"><img src="/images/play_store.png" className="img-fluid"/></Link>
                                      <Link to="#"><img src="/images/app_store.png" className="img-fluid"/></Link>
                                    </div>
                                    <div className=" ms-3">
                                      <img src="/images/qr_code.png"/>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 text-center">
                            <div className="copyright-text">
                                <p>Copyright © 2022 Asian Exchange All Rights Reserved. by  <a href="#">Appinop</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </div>
  )
}

export default Footer

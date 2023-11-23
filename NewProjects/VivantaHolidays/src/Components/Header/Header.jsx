import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="header">
            <div className="container">
                <Link to="/" className="logo"><img src="assets/images/common/logo.png" alt="Logo" /></Link>
                <ul className="menu">
                    <li><Link to="/" className="active">HOME </Link></li>
                    <li><Link to="/about">ABOUT US </Link></li>
                    <li className="dropdown-menu">
                        <a href="javascript:void(0)">INTERNATIONAL PACKAGES <img src="assets/images/common/down.svg" alt="" /> </a>
                        <div className="menu-open">
                            <div className="inside-menu">
                                <article>
                                    <div className="menu-heading">India</div>
                                    <ul>
                                        <li><a href="">Goa</a></li>
                                        <li><a href="">Kerala</a></li>
                                        <li><a href="">Bhutan</a></li>
                                        <li><a href="">Gujarat</a></li>
                                        <li><a href="">Leh</a></li>
                                    </ul>
                                    <div className="menu-heading">Asia</div>
                                    <ul>
                                        <li><a href="">Thailand</a></li>
                                        <li><a href="">Singapore</a></li>
                                        <li><a href="">China</a></li>
                                    </ul>
                                </article>

                                <article>
                                    <div className="menu-heading">Central Europe</div>
                                    <ul>
                                        <li><a href="">Finland</a></li>
                                        <li><a href="">Norway</a></li>
                                        <li><a href="">Spain</a></li>
                                        <li><a href="">All Of Europe</a></li>
                                        <li><a href="">Switzerland</a></li>
                                        <li><a href="">France</a></li>
                                    </ul>
                                    <div className="menu-heading">East Europe</div>
                                    <ul>
                                        <li><a href="">Croatia</a></li>
                                        <li><a href="">Czech Republic</a></li>
                                    </ul>
                                </article>

                                <article>
                                    <div className="menu-heading">Middle East</div>
                                    <ul>
                                        <li><a href="">UAE - Dubai</a></li>
                                        <li><a href="">Kazakhstan</a></li>
                                        <li><a href="">Georgia</a></li>
                                        <li><a href="">Oman Muscat</a></li>
                                        <li><a href="">Baku - Azerbaijan</a></li>
                                        <li><a href="">Saudi Arabia</a></li>
                                        <li><a href="">Israel - Jordan</a></li>
                                    </ul>
                                </article>

                                <article>
                                    <div className="menu-heading">Australia & NZ</div>
                                    <ul>
                                        <li><a href="">Australia</a></li>
                                        <li><a href="">New Zealand</a></li>
                                        <li><a href="">Fiji & Bora Bora</a></li>
                                    </ul>
                                    <div className="menu-heading">America</div>
                                    <ul>
                                        <li><a href="">Hawaii</a></li>
                                        <li><a href="">Canada</a></li>
                                        <li><a href="">Alaska</a></li>
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </li>
                    <li><a href="">CUSTOMER TESTMONIALS </a></li>
                    <li><Link to="/contact">CONTACT US</Link></li>
                    
                </ul>
                <div className="menu-icon">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header

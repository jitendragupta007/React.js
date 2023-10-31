import React from 'react'
import { Link } from 'react-router-dom'

const Trade = () => {
  return (
    <div>
     <div>
      <section className="sub-page-banner relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 wow fadeInUp animated animated" style={{visibility:"visible"}}>
                        <div className="page-banner text-center">
                            <h1 className="sub-banner-title">Contact</h1>
                            <ul>
                                <li><Link to="/" >Home</Link></li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
      
    </div>
  )
}

export default Trade

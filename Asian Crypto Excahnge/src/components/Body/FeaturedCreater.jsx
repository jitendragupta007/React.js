import React from 'react'

const FeaturedCreater = () => {
  return (
    <div>
       <section className="featured-creator" >
    <div className="container" >
            <div className="heading-part text-center mb-5">
                <span className="sub-title">How does it work?</span>
                <h2>It's really easy!</h2>
                <p>It's easier than you think.Follow 3 simple easy steps</p>
            </div>
            <div className="row" >
                <div className="col-md-4 text-center" >
                    <img src="images/hdiw_1.png" className="img-fluid" />
                    <p className="my-4" >You choose the currency and payment method</p>
                </div>
                <div className="col-md-4 text-center" >
                    <img src="images/hdiw_2.png" className="img-fluid" />
                    <p className="my-4" >Pass Account Verificationd</p>
                </div>
                <div className="col-md-4 text-center" >
                    <img src="images/hdiw_3.png" className="img-fluid" />
                    <p className="my-4" >Receive cryptocurrency</p>
                </div>
            </div>

    </div>
  </section>
    </div>
  )
}

export default FeaturedCreater

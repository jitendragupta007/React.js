import React from 'react'

const ContactBody = () => {
  return (
    <div>
    <div className="main">
        <section className="sub-page-banner sub-page-banner-space relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-banner  text-center">
                            <h1 className="sub-banner-title text-white"> Contact us </h1>
                            <hr/> 
                            <p className="text-white" >
                                Enter details to connect with you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mm-sec funds_sec account_sec invite_sec logg_inn">
            <div className="container">
                
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-12 col-md-8">
                        <div className="tab-content">
                            <div className="contact-form">
                                <h2 className="page-heading text-center d-block mb-3">Leave a message here</h2>
                                    <div className="contactfrmmsg">Thank You! Your message has been sent.</div>
                                        <form method="post" className="contactfrm">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="text" className="form-control" placeholder="Name*" required=""/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="text" className="form-control" placeholder="Email*" required=""/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="text" className="form-control" placeholder="Subject*" required=""/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" name="text" className="form-control" placeholder="Phone*" required=""/>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <button type="submit" className="btn">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>



                        </div>
                    </div>
                   
                </div>
                
            </div>
        </section>
      
    </div>
    </div>
  )
}

export default ContactBody

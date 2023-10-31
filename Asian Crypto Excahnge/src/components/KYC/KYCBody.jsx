import React from 'react'

const KYCBody = () => {
  return (
    <div>
      <div className="main">
        <section className="sub-page-banner sub-page-banner-space relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="page-banner  text-center">
                            <h1 className="sub-banner-title text-white">KYC Verification</h1>
                            <hr/> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mm-sec funds_sec account_sec">
            <div className="container">
                
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-12 col-md-8">
                        <div className="tab-content">
                            <div className="form-field-wrapper kyc_wrapper ">
                                <div className="rightsidebox">
                                    <div className="kyc_nofti kyc_done">
                                        <div className="sc-bdfBQB sc-kmATbt fOxqyX dzKkzw">
                                            <div className="check_bar acive"><i className="fa fa-check"></i>
                                                <h5> Email</h5> </div>
                                            <div className="check_bar acive"><i className="fa fa-check"></i>
                                                <h5> Security </h5> </div>
                                            <div className="check_bar acive"><i className="fa fa-check bg-success"></i>
                                                <h5> Welcome </h5> </div>
                                        </div>
                                        <hr />
                                        <div className="d-kyc_sec">
                                            <div>
                                                <h4>Congratulations</h4>
                                                <p>Your Yug Exchange account is approved</p>
                                            </div>
                                            <a href="/trade" className="btn btn-gradient btn-medium justify-content-center px-5"> <span>Start Trading</span> </a>
                                        </div>
                                        <hr />
                                        <div className="d-kyc_share">
                                            <div>
                                                <h5>Earn 50% commssion on your friend's trading fees</h5>
                                                <p><small>when your friend sign up using your referal link & trades, you can earn 50% commission on their trading fees.</small></p>
                                            </div> <a href="/invite" className="btn btn-dark btn-mini px-4"><span>Invite & Earn</span></a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                


                    <div className="col-lg-9 col-md-12 col-md-8">
                        <div className="tab-content">
                            <div className="create-item-wrapper">
                                <div className="form-field-wrapper ">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="field-box">
                                                <label for="royality" className="form-label">Select country</label>
                                                <select id="royality" className="form-control" >
                                                    <option selected>India</option>
                                                    <option data-countryCode="DZ" defaultValue="213">Algeria </option>
                                                    <option data-countryCode="AD" defaultValue="376">Andorra</option>
                                                    <option data-countryCode="AO" defaultValue="244">Angola </option>
                                                    <option data-countryCode="AI" defaultValue="1264">Anguilla</option>
                                                    <option data-countryCode="AG" defaultValue="1268">Antigua &amp; Barbuda </option>
                                                    <option data-countryCode="AR" defaultValue="54">Argentina </option>
                                                    <option data-countryCode="AM" defaultValue="374">Armenia </option>
                                                    <option data-countryCode="AW" defaultValue="297">Aruba </option>
                                                    <option data-countryCode="AU" defaultValue="61">Australia </option>
                                                    <option data-countryCode="AT" defaultValue="43">Austria</option>
                                                    <option data-countryCode="AZ" defaultValue="994">Azerbaijan </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="field-box">
                                                <label for="sizes" className="form-label">KYC Type</label>
                                                <select id="royality"  className="form-control">
                                                    <option selected data-countryCode="DZ" defaultValue="213">Personal KYC </option>
                                                    <option data-countryCode="AD" defaultValue="376">Enterprises kyc</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 pt-6">
                                    <h5 className="title ">
                            Personal Information
                          </h5> </div>
                                <div className="form-field-wrapper ">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="field-box">
                                                <label for="name" className="form-label">First Name</label>
                                                <input className="form-control" id="name" type="text" placeholder=""/> </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="field-box">
                                                <label for="name" className="form-label">Last Name</label>
                                                <input className="form-control" id="name" type="text" placeholder=""/> </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <div className="field-box">
                                                <label for="name" className="form-label">Date of birth</label>
                                                <input className="form-control" id="name" type="date" placeholder=""/> </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="field-box">
                                                <label for="name" className="form-label">City</label>
                                                <input className="form-control" id="name" type="text" placeholder=""/> </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="field-box">
                                                <label for="name" className="form-label">State</label>
                                                <input className="form-control" id="name" type="text" placeholder=""/> </div>
                                        </div>
                                        <div className="col-md-4 mb-4">
                                            <div className="field-box">
                                                <label for="name" className="form-label">Pin Code</label>
                                                <input className="form-control" id="name" type="text" placeholder=""/> </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <div className="field-box">
                                                <label for="name" className="form-label">Address</label>
                                                <input className="form-control" id="name" type="text" placeholder=""/> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 pt-6">
                                    <h5 className="title ">
                           Pan Card
                          </h5> </div>
                                <div className="form-field-wrapper ">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="field-box">
                                                <label for="name" className="form-label">Pan Card Number</label>
                                                <input className="form-control" id="name" type="text" placeholder=""/> </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="field-box">
                                                <label for="name" className="form-label"> Confirm Pan Card Number</label>
                                                <input className="form-control" id="name" type="text" placeholder=""/> </div>
                                        </div>
                                        <div className="col-md-12 upload-area">
                                            <div className="upload-formate mb-3">
                                                <h6 className="title mb-1">
                                Upload Item File
                              </h6> </div>
                                            <div className="brows-file-wrapper">
                                                
                                                <input className="form-control inputfile" name="file" id="file" type="file"  data-multiple-caption="{count} files selected" multiple />
                                                
                                                <label for="file" title="No File Choosen"> <i className="fa fa-cloud-upload"></i> <span className="text-center mb-2">Choose a File</span> <span className="file-type text-center mt--10">Drag or choose your file to upload</span> </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 pt-6">
                                    <h5 className="title ">
                            Document Type
                          </h5> </div>
                                <div className="form-field-wrapper ">
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="field-box">
                                                <label for="sizes" className="form-label">Select Document Type</label>
                                                <select id="royality" className="form-control form-select">
                                                    <option data-countryCode="DZ" defaultValue="213">Aadhar card </option>
                                                    <option data-countryCode="AD" defaultValue="376">Driving License kyc</option>
                                                    <option data-countryCode="AD" defaultValue="376">Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="field-box">
                                                <label for="name" className="form-label">Aadhar number</label>
                                                <input className="form-control" id="name" type="text" placeholder=""/> </div>
                                        </div>
                                        <div className="col-md-6 upload-area">
                                            <div className="upload-formate mb-3">
                                                <h6 className="title mb-1">
                                Front Image
                              </h6> </div>
                                            <div className="brows-file-wrapper">
                                                
                                                <input className="form-control inputfile" name="file" id="file" type="file" data-multiple-caption="{count} files selected" multiple />
                                                
                                                <label for="file" title="No File Choosen"> <i className="fa fa-cloud-upload"></i> <span className="text-center mb-2">Choose a File</span> <span className="file-type text-center mt--10">Drag or choose your file to upload</span> </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 upload-area">
                                            <div className="upload-formate mb-3">
                                                <h6 className="title mb-1">
                                Back Image
                              </h6> </div>
                                            <div className="brows-file-wrapper">
                                                
                                                <input className="form-control inputfile" name="file" id="file" type="file"  data-multiple-caption="{count} files selected" multiple />
                                               
                                                <label for="file" title="No File Choosen"> <i className="fa fa-cloud-upload"></i> <span className="text-center mb-2">Choose a File</span> <span className="file-type text-center mt--10">Drag or choose your file to upload</span> </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-4 pt-6">
                                    <h5 className="title ">
                            Upload Your Image(Selfie)
                          </h5> </div>
                                    <div className="row">
                                        <div className="col-md-12 upload-area">
                                            <div className="brows-file-wrapper">
                                                
                                                <input className="form-control inputfile" name="file" id="file" type="file" data-multiple-caption="{count} files selected" multiple />
                                             
                                                <label for="file" title="No File Choosen"> <i className="fa fa-cloud-upload"></i> <span className="text-center mb-2">Choose a File</span> <span className="file-type text-center mt--10">Drag or choose your file to upload</span> </label>
                                            </div>
                                        </div>
                                    </div>
                                    
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex-between upload-btn-wrapper flex-wrap">
                                         <button className="btn btn-gradient btn-medium justify-content-center w-50 px-4"><span>Submit for verification</span></button>
                                    </div>
                                </div>
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

export default KYCBody

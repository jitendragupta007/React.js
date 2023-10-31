import React from 'react'

const BankAccountDetails = () => {
  return (
    <div>
       <div
                    className="tab-pane"
                    id="PaymentPill"
                    role="tabpanel"
                    aria-labelledby="Payment-pill"
                  >
                    <div className="upload-formate mb-5 d-flex justify-content-between align-items-center">
                      <div>
                        <h3 className="mb-1">Payment Options</h3>
                        <p className="formate mb-0">
                          Select your payment options for all transtions.
                        </p>
                      </div>
                      <button
                        className=" btn  justify-content-center px-4"
                        data-bs-toggle="modal"
                        data-bs-target="#addaccount_modal"
                      >
                        <span> Add New Account</span>
                      </button>
                    </div>

                    <div className="form-field-wrapper-blue bank-acc mb-3 ">
                      <div className="d-flex align-items-start justify-content-between">
                        <h5 className="text-start">
                          <small>Bank Account</small>
                          <br />
                          BANK OF BARODA{" "}
                        </h5>
                      </div>
                      <div className="acc_details">
                        <div className="row">
                          <div className="col-md-4">
                            <h5 className="text-start">
                              <small>Account Number</small> <br /> 5151452102562
                            </h5>
                          </div>
                          <div className="col-md-4">
                            <h5 className="text-start">
                              <small>IFSC Code</small> <br />
                              SBIN0020702
                            </h5>
                          </div>
                          <div className="col-md-4">
                            <h5 className="text-start">
                              <small>Account Type</small> <br />
                              CURRENT
                            </h5>
                          </div>
                          <div className="col-md-4">
                            <h5 className="text-start">
                              <small>Branch Address</small> <br />
                              SBI JAIPUR
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default BankAccountDetails

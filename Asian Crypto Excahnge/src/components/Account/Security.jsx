import React from 'react'

const Security = () => {
  return (
    <div>
       <div class="tab-pane" id="SecurityPill" role="tabpanel" aria-labelledby="Security-pill">
                                        <div class="upload-formate mb-5 d-flex justify-content-between align-items-center">
                                            <div>
                                              <h3 class="mb-1">
                                                Secutity
                                                </h3>
                                                <p class="formate mb-0">
                                                 Fill the form below to change your password.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row" >
                                          <div class="col-md-12 col-lg-8 m-auto" >
                                            <div class="form-field-wrapper-blue switch_btn  border-dashed border-gray-300 bg-lighten card-rounded p-4">
                                              <form action="#">
                                            <div class="row">
                                              <div class="col-md-12 mb-4">
                                                <div class="field-box">
                                                  <label for="text" class="form-label">Current Password</label>
                                                  <input id="text" type="text" class="form-control form-select-border" placeholder="Please enter Password"/>
                                                </div>
                                              </div>
                                              <div class="col-md-6 mb-4">
                                                <div class="field-box">
                                                  <label for="text" class="form-label">New Password</label>
                                                  <input id="text" type="text" class="form-control form-select-border" placeholder="Please enter Password"/>
                                                </div>
                                              </div>
                                              <div class="col-md-6 mb-4">
                                                <div class="field-box">
                                                  <label for="text" class="form-label">Confirm New Password</label>
                                                  <input id="text" type="text" class="form-control form-select-border" placeholder="Please enter Password"/>
                                                </div>
                                              </div>
                                              

                                              <div class="col-md-12 mb-4 mt-4">
                                                <div class="field-box">
                                                  <button class="btn btn-gradient w-100 justify-content-center btn-medium {
                                                    " type="submit"><span>Submit</span></button>
                                                </div>
                                              </div>
                                              
                                            </div>
                                          </form>

                                            </div>
                                          </div>
                                        </div>
                                    </div>
    </div>
  )
}

export default Security

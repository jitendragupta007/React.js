import React from 'react'

const Notification = () => {
  return (
    <div>
       <div
                    className="tab-pane"
                    id="NotificationPill"
                    role="tabpanel"
                    aria-labelledby="Notification-pill"
                  >
                    <div className="upload-formate mb-5 d-flex justify-content-between align-items-center">
                      <div>
                        <h3 className="mb-1">Notification Preference</h3>
                        <p className="formate mb-0">
                          Select your notification options for alerts.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-lg-8 m-auto">
                        <div className="form-field-wrapper-blue switch_btn  border-dashed border-gray-300 bg-lighten card-rounded p-4">
                          <div className="d-flex align-items-center justify-space-between">
                            <h6 className="mb-0 w-100">Account Status</h6>
                            <div className="form-check  switch_btns form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                              />
                            </div>
                          </div>
                          <hr />
                          <div className="d-flex align-items-center justify-space-between">
                            <h6 className="mb-0 w-100">Trade Status</h6>
                            <div className="form-check  switch_btns form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="account_status2"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default Notification

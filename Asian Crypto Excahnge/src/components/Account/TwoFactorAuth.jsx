import React from "react";

const TwoFactorAuth = () => {
  return (
    <div>
      <div
        className="tab-pane"
        id="AuthencationPill"
        role="tabpanel"
        aria-labelledby="Authencation-pill"
      >
        <div className="upload-formate mb-5 d-flex justify-content-between align-items-center">
          <div>
            <h3 className="mb-1">Two Factor Authencation</h3>
            <p className="formate mb-0">
              SelectTwo Factor Authencation for your security.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-8 m-auto">
            <div className="form-field-wrapper-blue switch_btn  border-dashed border-gray-300 bg-lighten card-rounded p-4">
              <div className="d-flex align-items-center justify-space-between">
                <h6 className="mb-0 w-100">Authenticator App</h6>
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
                <h6 className="mb-0 w-100">Email SMS</h6>
                <div className="form-check  switch_btns form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="account_status2"
                  />
                </div>
              </div>
              <hr />
              <div className="d-flex align-items-center justify-space-between">
                <h6 className="mb-0 w-100">None</h6>
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
  );
};

export default TwoFactorAuth;

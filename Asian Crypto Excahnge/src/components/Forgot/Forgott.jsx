import React from "react";
import { Link } from "react-router-dom";

const Forgott = () => {
  return (
    <div>
      <section className="logi_sec bg-img primary-color ">
        <div className="container">
          <div className="logg-card">
            <div className="row g-md-5 align-items-center">
              <div className="col-md-6">
                <img
                  src="images/login_img.png"
                  className="img-fluid login_img"
                />
              </div>
              <div className="col-md-6">
                <div className="login-form px-md-3 px-lg-5">
                  <h3 className="mb-lg-5 mb-4 text-center">Forgot Password</h3>
                  <div className="input-group form-group">
                    <i className="fa fa-envelope"></i>
                    <input
                      type="text"
                      name="text"
                      className="form-control px-2"
                      placeholder="Enter Email or mobile"
                      required=""
                    />
                  </div>

                  <button className="btn btn-block w-100 form-group">
                    Submit
                  </button>

                  <div className="d-flex align-items-center justify-content-center">
                    <Link to="/login" className="text-link">
                      {" "}
                      <i className="fa fa-arrow-left me-2"></i> Back to Login{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link className="text-link text-home" to="/">
            <i className="fa fa-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Forgott;

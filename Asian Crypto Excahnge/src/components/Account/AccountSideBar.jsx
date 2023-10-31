import React from 'react'
import { NavLink,Link } from 'react-router-dom'


const AccountSideBar = () => {
  return (

      <div className="col-lg-3 col-md-12 col-md-4">
                <div className="acc_tabs form-field-wrapper">
                  <ul
                    className="nav nav-pills flex-column"
                    id="cardTab"
                    role="tablist"
                  >
                    <li className="nav-item  ">
                      <NavLink
                        className="menu-link  nav-link"
                        id="Profile-pill"
                        to="/account/"
                        // data-bs-toggle="tab"
                        // role="tab"
                        // aria-controls="Profile"
                        // aria-selected="true"
                      >
                        <span className="menu-bullet">
                          <span className="bullet"></span>
                        </span>
                        <span className="menu-title"> My Profile </span>
                      </NavLink>
                    </li>
                    <li className="nav-item  ">
                      <NavLink
                        className="menu-link nav-link"
                        id="Currency-pill"
                        to="/account/currencypreference"
                        // data-bs-toggle="tab"
                        // role="tab"
                        // aria-controls="Currency"
                        // aria-selected="false"
                      >
                        {" "}
                        <span className="menu-bullet">
                          <span className="bullet"></span>
                        </span>
                        <span className="menu-title">
                          {" "}
                          Currency Preference{" "}
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item  ">
                      <Link className="menu-link nav-link" to="/kyc">
                        {" "}
                        <span className="menu-bullet">
                          <span className="bullet"></span>
                        </span>
                        <span className="menu-title"> KYC Verification</span>
                      </Link>
                    </li>
                    <li className="nav-item  ">
                      <NavLink
                        className="menu-link nav-link"
                        id="Payment-pill"
                        to="/account/bankaccountdetails"
                        // data-bs-toggle="tab"
                        // role="tab"
                        // aria-controls="Payment"
                        // aria-selected="false"
                      >
                        {" "}
                        <span className="menu-bullet">
                          <span className="bullet"></span>
                        </span>
                        <span className="menu-title">
                          {" "}
                          Bank Account Details{" "}
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item  ">
                      <NavLink
                        className="menu-link nav-link"
                        id="Notification-pill"
                        to="/account/notification"
                        // data-bs-toggle="tab"
                        // role="tab"
                        // aria-controls="Notification"
                        // aria-selected="false"
                      >
                        {" "}
                        <span className="menu-bullet">
                          <span className="bullet"></span>
                        </span>
                        <span className="menu-title"> Notification</span>
                      </NavLink>
                    </li>
                    <li className="nav-item  ">
                      <NavLink
                        className="menu-link nav-link"
                        id="Authencation-pill"
                        to="/account/twofactorauthentication"
                        // data-bs-toggle="tab"
                        // role="tab"
                        // aria-controls="Authencation"
                        // aria-selected="false"
                      >
                        {" "}
                        <span className="menu-bullet">
                          <span className="bullet"></span>
                        </span>
                        <span className="menu-title">
                          {" "}
                          Two Factor Authencation
                        </span>
                      </NavLink>
                    </li>
                    <li className="nav-item  ">
                      <NavLink
                        className="menu-link nav-link"
                        id="Security-pill"
                        to="/account/security"
                        // data-bs-toggle="tab"
                        // role="tab"
                        // aria-controls="Security"
                        // aria-selected="false"
                      >
                        {" "}
                        <span className="menu-bullet">
                          <span className="bullet"></span>
                        </span>
                        <span className="menu-title"> Security</span>
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        className="menu-link  nav-link"
                        id="Activity-pill"
                        to="/account/activitylogs"
                        // data-bs-toggle="tab"
                        // role="tab"
                        // aria-controls="Activity"
                        // aria-selected="false"
                      >
                        {" "}
                        <span className="menu-bullet">
                          <span className="bullet"></span>
                        </span>
                        <span className="menu-title"> Activity Logs</span>
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        className="menu-link  nav-link"
                        id="Transitions-pill"
                       to="/account/transferhistory"
                        // data-bs-toggle="tab"
                        // role="tab"
                        // aria-controls="example"
                        // aria-selected="false"
                      >
                        {" "}
                        <span className="menu-bullet">
                          <span className="bullet"></span>
                        </span>
                        <span className="menu-title"> Transfer History</span>
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <Link className="menu-link  nav-link" to="/invite">
                        {" "}
                        <span className="menu-bullet">
                          <span className="bullet"></span>
                        </span>
                        <span className="menu-title"> Invite & Earn</span>
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        className="menu-link  nav-link"
                        id="down-report-pill"
                        to="/account/downloadreports"
                        // data-bs-toggle="tab"
                        // role="tab"
                        // aria-controls="down-report"
                        // aria-selected="false"
                      >
                        {" "}
                        <span className="menu-bullet">
                          <span className="bullet"></span>
                        </span>
                        <span className="menu-title"> Download Reports</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
  
  )
}

export default AccountSideBar

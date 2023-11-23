import React from "react";
import { NavLink } from "react-router-dom";

const ContentInfo = () => {
  return (
    <section className="hotel_content_info">
      <div className="container">
        <ul className="tabs">
        <NavLink to="/details/">
            {" "}
            <li className="tab-NavLink current" data-tab="tab-2">
              Rooms & Prices
            </li>
          </NavLink>
          <NavLink to="/details/hotelroominfo">
            {" "}
            <li className="tab-NavLink" data-tab="tab-1">
              Hotel Information
            </li>
          </NavLink>

        </ul>
      </div>
    </section>
  
  );
};

export default ContentInfo;

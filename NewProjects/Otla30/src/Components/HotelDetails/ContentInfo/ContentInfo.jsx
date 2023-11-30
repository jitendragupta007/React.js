import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";


const ContentInfo = () => {
  const params = useParams()
  console.log("ParamsInfo",params)
  
  return (
    <section className="hotel_content_info">
      <div className="container">
        <ul className="tabs">
          <NavLink to={`/details/${params?.hotelName}/${params?.hotelid}`}>
            {" "}
            <li className="tab-NavLink current" data-tab="tab-2">
              Rooms & Prices
            </li>
          </NavLink>
          <NavLink to={`/details/${params?.hotelName}/${params.hotelid}/hotelroominfo`}>
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

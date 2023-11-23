import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const findHoliday = () => {
    navigate("/result");
  };

  return (
    <div>
      <section className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="heading">Find Your Next Destination</div>
            <div className="searchtabs">
              <div className="tabbox">
                <img src="assets/images/home/tour.svg" alt="" />{" "}
                <span> Tours</span>
              </div>
            </div>
            <div className="banner-search-box">
              <ul>
                <li>
                  <label>Destination </label>
                  <div className="select-box">
                    <input type="text" placeholder="select destination" />
                  </div>
                </li>

                <li className="s-button">
                  <button onClick={findHoliday} className="search_button">
                    Find Your Holiday
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

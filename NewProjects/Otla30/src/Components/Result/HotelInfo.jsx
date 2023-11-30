import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HotelInfo = ({ element }) => {
  const starRatingValue = Math.ceil(element?.starrating);
  const [starRating, setStarRating] = useState(starRatingValue);

  const navigate = useNavigate();

  const starArr = [];
  for (let i = 1; i <= starRating; i++) {
    starArr.push(i);
  }

  const ImgUrl = `https://photos.hotelbeds.com/giata/bigger/${element?.image}`;

  const handleChooseRoom = (element) => {
    console.log("element", element);
    const hotelname = element.hotelname?.replace(/ /g, "_");
    console.log(hotelname);
    sessionStorage.removeItem("detailToken");

    navigate(`/details/${hotelname}/${element.hotelid}`);
  };

  return (
    <div id="hotelresult">
      <div className="booking-room">
        {" "}
        <div className="left-side">
          <figure>
            <img src={ImgUrl} />{" "}
          </figure>
          <div className="right">
            {" "}
            <h2>
              {" "}
              {element?.hotelname}{" "}
              <small className="reviewhotel">{element?.review}</small>
            </h2>
            <label>
              {starArr.map((element, index) => {
                return <img key={index} src="/assets/images/home/star.png" />;
              })}
            </label>{" "}
            <div className="c1">
              {" "}
              <img src="../assets/images/home/map.svg" />{" "}
              <p>{element?.address}</p>
            </div>{" "}
          </div>
        </div>
        <div className="right-side">
          <label>
            From
            <br /> <strong>USD {element?.net_price}</strong>
            <br /> <small>per night USD {element?.price}</small>{" "}
          </label>{" "}
          <div
            style={{ cursor: "pointer" }}
            className="choose-btn"
            onClick={() => handleChooseRoom(element)}
          >
            {" "}
            <a className="selectroom">Choose Room</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;

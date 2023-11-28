import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BackBTNBar = () => {
  const selectedRoomData = useSelector(
    (store) => store?.SelectedHotel?.data[0]
  );
  const navigate = useNavigate();
  const sendBack = () => {
    navigate(-1);
  };

  let starArr = [];
  for (let i = 0; i < selectedRoomData?.data?.starrating; i++) {
    starArr.push("rating");
  }
  console.log("starArr", starArr);

  return (
    <section className="back_button_top">
      <div className="container">
        <Link onClick={sendBack}>
          {" "}
          <i className="fa fa-chevron-left" aria-hidden="true"></i> Back{" "}
        </Link>
        <div className="right_text">
          <label>{selectedRoomData?.data?.name} </label>
          <div className="icon">
            {starArr?.map((_, index) => {
              return (
                <img key={index} src="/assets/images/home/star.png" alt={`Star ${index + 1}`} />
              );
            })}
          </div>
          <p>
            {selectedRoomData?.data?.address},{selectedRoomData?.data?.country}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackBTNBar;

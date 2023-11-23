import React from "react";

const RoomsAndPrices = () => {
  return (
    <div id="tab-2" className="tab-content current">
      <div className="room_price_guest">
        <ul className="top_tab_btn">
          <li>1 x Room</li>
        </ul>

        <div className="hotel_deta_info">
          <div className="hotel_content_box">
            <div className="top_title">1 Room for 2 Adults</div>

            <div className="room_table_row">
              <a href="" className="standard_room">
                {" "}
                <i className="fa fa-fw fa-bed"></i> standard double or twin room
              </a>
              <div className="tabel_row">
                <table>
                  <tr>
                    <th>Room</th>
                    <th>Cancellation</th>
                    <th>To be paid</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>ROOM ONLY</td>
                    <td>
                      {" "}
                      <span>
                        Refundable <i className="fa fa-fw fa-info-circle"></i>
                      </span>{" "}
                    </td>
                    <td>
                      {" "}
                      INR <strong>6361.69</strong>{" "}
                    </td>
                    <td>
                      {" "}
                      <button className="r_btn">Select</button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>ROOM ONLY</td>
                    <td>
                      {" "}
                      <small>Non-Refundable</small>{" "}
                    </td>
                    <td>
                      {" "}
                      INR <strong>6361.69</strong>{" "}
                    </td>
                    <td>
                      {" "}
                      <button className="r_btn">Select</button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>ROOM ONLY</td>
                    <td>
                      {" "}
                      <span>
                        Refundable <i className="fa fa-fw fa-info-circle"></i>
                      </span>{" "}
                    </td>
                    <td>
                      {" "}
                      INR <strong>6361.69</strong>{" "}
                    </td>
                    <td>
                      {" "}
                      <button className="r_btn">Select</button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>BED AND BREAKFAST</td>
                    <td>
                      {" "}
                      <span>
                        Refundable <i className="fa fa-fw fa-info-circle"></i>
                      </span>{" "}
                    </td>
                    <td>
                      {" "}
                      INR <strong>6361.69</strong>{" "}
                    </td>
                    <td>
                      {" "}
                      <button className="r_btn">Select</button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>BED AND BREAKFAST</td>
                    <td>
                      <small>Non-Refundable</small>{" "}
                    </td>
                    <td>
                      {" "}
                      INR <strong>6361.69</strong>{" "}
                    </td>
                    <td>
                      {" "}
                      <button className="r_btn">Select</button>{" "}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="right_row_section">
            <div className="hotel_booking_price">
              <div className="heading">
                <i className="fa fa-building"></i> Your Hotel
              </div>
              <p>Delmon Boutique Hotel</p>
              <div className="icons">
                <img src="assets/images/home/star.png" alt="" />
                <img src="assets/images/home/star.png" alt="" />
                <img src="assets/images/home/star.png" alt="" />
              </div>
              <p>Naif St .</p>
              <div className="heading">
                {" "}
                <i className="fa fa-fw fa-bed"></i> 1 Room for 2 Adults{" "}
              </div>
              <p>standard double or twin room ( ROOM ONLY )</p>
              <ul>
                <li>
                  <span>Per Night</span> <strong>INR 2120.56</strong>{" "}
                </li>
                <li>
                  <span>Total</span> <strong>INR 6361.69</strong>{" "}
                </li>
              </ul>

              <a href="hotel-basket.html" className="book_button">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsAndPrices;

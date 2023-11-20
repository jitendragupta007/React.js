import React, { useEffect } from "react";
import { useResult } from "../../Store/ResultStore";
import HotelInfo from "./HotelInfo";
import BoardType from "./BoardType";
import Location from "./Location";
import Shorting from "./ShortingFilter/Shorting";
import { hotelResults } from "../../Utils/Auth";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { resultData, setResultData } = useResult();
  const searchToken = sessionStorage.getItem("searchToken");
  const navigate = useNavigate();

  useEffect(() => {
    getResultData();
  }, [searchToken]);

  const getResultData = async () => {
    const response = await hotelResults(searchToken);
    if (response.success) {
      try {
        console.log("ResponseResult", response.data);
        setResultData(response?.data);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      if (response.message === "CALL_AGAIN") {
        getResultData();
      } else {
        console.log("responseErrorResult", response.message);
        navigate("/");
      }
    }
  };

  console.log("resultPageData", resultData);

  return (
    <section className="hotel-section">
      <div className="container">
        <h1 className="totalhotelfound"></h1>
        <div className="search-btn">Filter hotels</div>
        <div className="maindiv">
          <div className="left-div">
            <ul className="searchtype">
              <li className="active packtagetypee">Filter</li>
            </ul>
            <div className="filtertab">
              <div className="title newfiltertitle">Hotel Name</div>
              <ul className="hotelnamefilter">
                <li>
                  <input
                    type="text"
                    id="hotelname"
                    className="hotelfilterinput"
                    placeholder="Search Hotel Name Here!"
                  />
                  <input type="hidden" id="hdnhotelname" value="" />

                  <ul className="autocompletehotel">
                    <li>Enter more than 3 characters</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="filtertab">
              <div className="title newfiltertitle">Price</div>
              <ul className="price">
                <li></li>
              </ul>
            </div>

            <div className="filtertab">
              <div className="title newfiltertitle">Star Rating</div>
              <ul className="starratinglist">
                <li>
                  <label>
                    <input
                      type="checkbox"
                      className="starrating"
                      data-value="5"
                    />
                    <img src="/assets/images/home/star.png" />
                    <img src="/assets/images/home/star.png" />
                    <img src="/assets/images/home/star.png" />
                    <img src="/assets/images/home/star.png" />
                    <img src="/assets/images/home/star.png" />
                    <span className="checkspan"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      className="starrating"
                      data-value="4"
                    />
                    <img src="/assets/images/home/star.png" />
                    <img src="/assets/images/home/star.png" />
                    <img src="/assets/images/home/star.png" />
                    <img src="/assets/images/home/star.png" />
                    <img src="/assets/images/home/star1.png" />
                    <span className="checkspan"></span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="checkbox"
                      className="starrating"
                      data-value="3"
                    />
                    <img src="/assets/images/home/star.png" />
                    <img src="/assets/images/home/star.png" />
                    <img src="/assets/images/home/star.png" />
                    <img src="/assets/images/home/star1.png" />
                    <img src="/assets/images/home/star1.png" />
                    <span className="checkspan"></span>
                  </label>
                </li>
              </ul>
            </div>

            <div className="filtertab">
              <div className="title newfiltertitle">Board Type</div>
              <ul className="mealtypelist">
                {resultData?.Filter?.boards?.map((element) => {
                  return (
                    <div key={element?.code}>
                      <BoardType element={element} />
                    </div>
                  );
                })}
              </ul>
            </div>

            <div className="filtertab" style={{ display: "none" }}>
              <div className="title newfiltertitle">Hotel Type</div>
              <ul className="hoteltypelist"></ul>
            </div>

            <div className="filtertab">
              <div className="title newfiltertitle">Loction</div>
              <ul className="zonetypelist">
                {resultData?.Filter?.zones.map((element, index) => {
                  return (
                    <div key={index}>
                      <Location key={element?.code} element={element} />
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="right-div">
            <Shorting resultData={resultData} setResultData={setResultData} />

            {resultData?.Data?.map((element) => {
              return (
                <div key={element?.unique_id}>
                  <HotelInfo element={element} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Result;

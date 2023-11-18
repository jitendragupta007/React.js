import React, { useState, useEffect } from "react";
import Departure from "./Departure";
import { searchHotels } from "../../../Utils/Auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useResult } from "../../../Store/ResultStore";
import { useDispatch, useSelector } from "react-redux";
import { addInfo } from "../../../Store/SearchParamsSlice";
import HotelRoom from "./HotelRoom";
import { addRoom, totalPassengers,  removeRoom,
  increaseAdult,
  decreaseAdult,
  increaseChild, 
  decreaseChildren } from "../../../Store/RoomDetailsSlice";


const Banner = () => {
  const [selected, setSelected] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [toggleStyle, setToggleStyle] = useState("none");
  const [searchParams, setSearchParams] = useState([]);
  const [roomDetails, setRoomDetails] = useState({
    rooms: [{ roomno: 1, adults: 1, children: 0, childrenages: [] }],
  });
  const navigate = useNavigate();
  const { getResultData } = useResult();

  const SearchParamsData = useSelector((store) => store.SearchParams.data);

  const sliceRoomDetails = useSelector((store) => store.RoomDetails.rooms);

  const adults = useSelector((store) => store.RoomDetails.totalAdults);

  const children =useSelector((store) => store.RoomDetails.totalChildren);
  
  const rooms =useSelector((store) => store.RoomDetails.totalRooms);

  console.log("SearchParamsData",  SearchParamsData);
  console.log("sliceRoomDetails", sliceRoomDetails)
  


  const dispatch = useDispatch();
  console.log("ToolKitRoomDetails", SearchParamsData[0]?.roomDetails?.rooms);

  useEffect(() => {
    handleAddInfo();
  }, [searchParams]);

  const handleAddInfo = () => {
    console.log("addInfo", searchParams);
    dispatch(addInfo(searchParams));
  };

  const handleToggle = () => {
    toggleStyle === "none" ? setToggleStyle("block") : setToggleStyle("none");
  };

  const date1 = new Date(fromDate);
  const date2 = new Date(toDate);
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
  console.log(numberOfNights + " nights");

  const storeSearchParams = () => {
    setSearchParams({
      cityname: selected.cityname,
      countryname:selected.countryname,
      code: selected.code,
      searchtype: selected.searchtype,
      cname: selected.cname,
      fromDate: fromDate,
      toDate: toDate,
      nights: numberOfNights,
      roomDetails: sliceRoomDetails,
    });
  };

  console.log("bannerSelected", selected);
  console.log("fromDate", fromDate);
  console.log("toDate", toDate);
  console.log("SearchParams", searchParams);
  console.log("hotelDetails", roomDetails);

  const sendSearchData = async () => {
    storeSearchParams();
    const result = await searchHotels(selected, fromDate, toDate,sliceRoomDetails);
    if (result.success) {
      try {
        console.log("result", result);
        sessionStorage.setItem("searchToken", result?.searchtoken);
        getResultData();
        navigate(`/result/${result.searchtoken}`);
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    } else {
      console.log(result.message);
      alert(result.message);
    }
  };

  const increaseRooms=()=>{
    dispatch(addRoom())
  }

  console.log("searchParams", searchParams);
  console.log("SearchParamsData", SearchParamsData);

  const handleRemoveRoom = (roomno) => {
    console.log("removeButtonClicked");
    console.log("removeId", roomno);
    dispatch(removeRoom(roomno));
  };

  const increaseAdults = (element) => {
    dispatch(increaseAdult(element));
  };

  const decreaseAdults = (element) => {
    dispatch(decreaseAdult(element));
  };

  const increaseChilds = (element) => {
    dispatch(increaseChild(element));
  };

  const decreaseChilds = (element) => {
    dispatch(decreaseChildren(element));
  };


  useEffect(() => {
  dispatch(totalPassengers())
},[dispatch,increaseAdults,decreaseAdults, increaseChilds, decreaseChilds, increaseRooms, handleRemoveRoom])


  return (
    <section className="banner-section">
      <div className="container">
        <div className="heading">
          {" "}
          <b>Compare</b> and <b>book</b> cheap flights and hotels
        </div>
        <p>Discover your next dream destination with Book My PNR</p>

        <div className="oneway">
          <ul className="tabs">
            <li className="tab-link" data-tab="tab-2">
              {" "}
              <i className="fas fa-solid fa-hotel"></i> Hotels
            </li>
          </ul>

          <div id="tab-2" className="tab-content current">
            <div className="hotel-search_box">
              <Departure selected={selected} setSelected={setSelected} />
              <div className="input-group">
                <label> From</label>
                <input
                  className="leaving"
                  type="date"
                  placeholder="DD/MM/YYYY"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label> To</label>
                <input
                  className="leaving"
                  type="date"
                  placeholder="DD/MM/YYYY"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>Guest</label>
                <strong onClick={handleToggle} className="travel-economy">
                  {rooms} Room,{adults} Adult & {children} Child
                </strong>
                <div
                  className="popuppaxdetails addnew"
                  style={{ display: toggleStyle }}
                >
                  <div className="mainpopupselectroom">
                    <div>
                      {sliceRoomDetails?.map((element,index) => {
                        return (
                          <div key={element?.id}>
                            <HotelRoom
                              element={element}
                              id={element?.roomno}
                              index={index}
                              handleRemoveRoom={handleRemoveRoom}
                              increaseAdults={increaseAdults}
                              decreaseAdults={decreaseAdults}
                              increaseChilds={increaseChilds}
                              decreaseChilds={decreaseChilds}
                              sliceRoomDetails=
                              {sliceRoomDetails}
                            
                            />
                          </div>
                        );
                      })}
                    </div>

                    <div className="addmorerooms">
                      <a style={{ cursor: "pointer" }} onClick={increaseRooms}>
                        + Add more rooms
                      </a>
                    </div>

                    <div className="flexdivnational_class">
                      <div className="input_typebox nationality">
                        <span>Nationality</span>
                        <select
                          className="formcontrol"
                          id="nationality"
                          name="nationality"
                        >
                          <option>Nationality</option>@
                        </select>
                      </div>
                    </div>

                    <div className="counter" style={{ width: "100%" }}>
                      <button
                        onClick={handleToggle}
                        type="button"
                        className="btnok"
                      >
                        Ok
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flight-search-box hotel_f">
              <div className="right-box">
                <button
                  onClick={sendSearchData}
                  className="search-btn btnsubmitflight"
                  id="flight_btnsubmit"
                >
                  Search Flights
                </button>
                <i className="search-icon"></i>
              </div>
            </div>
          </div>

          {/* <!-- <ul className="search-tabs">
                    <li>
                        <a href="#" className="hotel"> <i className="fa fas fa-regular fa-plane-departure"></i> Flights</a>
                    </li>
                    <li>
                        <a href="#"> <i className="fas fa-solid fa-hotel"></i> Hotels</a>
                    </li>
                    <li>
                        <a href="#" className="active"> <img src="/assets/images/activity.svg" alt="" /> Activities</a>
                    </li>
                    <li>
                        <a href="#"> <i className="fa fas fa-solid fa-car"></i> Cars</a>
                    </li>
                </ul> --> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;

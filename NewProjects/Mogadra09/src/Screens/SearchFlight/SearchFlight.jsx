import React, { useState, useEffect } from "react";
import SearchBox from "../../Components/SearchFlight/SearchBox/SearchBox";
import Autocomplete from "../../Components/SearchFlight/Autocomplete/Autocomplete";
import { useNavigate } from "react-router-dom";
import { checkValidData } from "../../Utils/Validation/Validation";
import { searchFlight } from "../../Utils/Auth/Auth";
import SelectDate from "../../Utils/DatePicker/DatePicker";

const SearchFlight = () => {
  const [oneWay, setOneWay] = useState(true);
  const [roundTrip, setRoundTrip] = useState(false);
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [depDate, setDepDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [cabin, setCabin] = useState("Economy className");
  const [adult, setAdult] = useState("1");
  const [child, setChild] = useState("0");
  const [infant, setInfant] = useState("0");
  const [fromData, setFromData] = useState([]);
  const [toData, setToData] = useState([]);
  const [toShow, setToShow] = useState(false);
  const [fromShow, setFromShow] = useState(false);
  const [toSelected, setToSelected] = useState("");
  const [fromSelected, setFromSelected] = useState("");
  const [searchParams, setSearchParams] = useState({});

  const navigate = useNavigate();

  console.log(
    "oneWay",
    oneWay,
    "roundTrip",
    roundTrip,
    "fromPlace",
    fromPlace,
    "toPlace",
    toPlace,
    "depDate",
    depDate,
    "returnDate",
    returnDate,
    "cabin",
    cabin,
    "adult",
    adult,
    "child",
    child,
    "infant",
    infant
  );

  console.log("searchParamsOut", searchParams);

  const handleSearch = () => {
    const message = checkValidData(
      toSelected.AirportCode,
      fromSelected.AirportCode,
      depDate,
      returnDate
    );
    if (message !== null) return alert(message);

    const selectedSearchData = {
      origin_name: fromSelected.AirportName,
      origin_iata: fromSelected.AirportCode,
      destination_name: toSelected.AirportName,
      destination_iata: toSelected.AirportCode,
      depart_date: depDate,
      return_date: returnDate,
      adults: adult,
      children: child,
      infants: infant,
      cabin: "1",
      stops: false,
      multi_routes: [],
      ages: [],
    };

    setSearchParams(selectedSearchData);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (Object.keys(searchParams).length === 0) {
        return;
      }
      console.log("searchParamsIn", searchParams);
      const result = await searchFlight(searchParams);
      if (result?.success) {
        try {
          console.log("result", result);

          const url = result?.message;
          const params = new URLSearchParams(url);
          const scValue = params.get("sc");
          console.log("scValue", scValue);

          navigate(`/flightresults/${scValue}`);
        } catch (error) {
          console.log("Error", error?.message);
          
        }
      } else {
        console.log("ResultErrr",result?.message);
        alert(result?.message);

      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <section className="flightsearch_box">
      <div className="container">
        <div className="radio_button_roots">
          <div className="box">
            <input
              type="radio"
              id="test1"
              name="radio-group"
              checked
              value={oneWay}
              onChange={(e) => setOneWay(e.target.checked)}
            />
            <label for="test1">One Way</label>
          </div>
          <div className="box">
            <input
              type="radio"
              id="test2"
              name="radio-group"
              value={roundTrip}
              onChange={(e) => setRoundTrip(e.target.checked)}
            />
            <label for="test2">Round Trip</label>
          </div>
        </div>

        <div className="input_roots">
          <div className="input_box searchinput">
            <label>From</label>
            <SearchBox
              place={fromPlace}
              setPlace={setFromPlace}
              setData={setFromData}
              setShow={setFromShow}
            />
            {fromShow && fromPlace.length > 3 && (
              <Autocomplete
                data={fromData}
                setPlace={setFromPlace}
                setShow={setFromShow}
                setData={setFromData}
                setSelected={setFromSelected}
              />
            )}
          </div>

          <div className="input_box searchinput">
            <label>To</label>
            <SearchBox
              place={toPlace}
              setPlace={setToPlace}
              setData={setToData}
              setShow={setToShow}
            />
            {toShow && toPlace.length > 3 && (
              <Autocomplete
                data={toData}
                setShow={setToShow}
                setData={setToData}
                setPlace={setToPlace}
                setSelected={setToSelected}
              />
            )}
          </div>

          <div className="input_box date_row">
            <label>DEPARTURE</label>
            <SelectDate style={{ cursor:"pointer"}} setSelectDate={setDepDate} />
          </div>

          <div className="input_box date_row">
            <label>Return</label>
            <SelectDate  style={{ cursor:"pointer"}} setSelectDate={setReturnDate} />
          </div>
          <div className="input_box date_row">
            <label>Cabin / className</label>
            <select value={cabin} onChange={(e) => setCabin(e.target.value)}>
              <option>Economy className</option>
              <option>Business className</option>
              <option>First className</option>
            </select>
          </div>
          <div className="date_row">
            <span> More options </span>
          </div>
          <div className="input_box adult_row ">
            <label>Adult (12+)</label>
            <select value={adult} onChange={(e) => setAdult(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="input_box adult_row">
            <label> Child(2-11)</label>
            <select value={child} onChange={(e) => setChild(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="input_box adult_row">
            <label> Infant(0-2)</label>
            <select value={infant} onChange={(e) => setInfant(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <button onClick={handleSearch} className="search_button">
            Search Flight
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchFlight;

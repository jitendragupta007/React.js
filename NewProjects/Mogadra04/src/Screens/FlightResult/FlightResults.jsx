import React, { useEffect, useState } from "react";
import ResultBox from "../../Components/FlightResult/ResultBox/ResultBox";
import ModifySearch from "../../Components/FlightResult/ModifySearch/ModifySearch";
import { useParams, useNavigate } from "react-router-dom";
import { getFlightData } from "../../Utils/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { setResult } from "../../Store/FlightResultSlice";

const FlightResults = () => {
  const { data: flight } = useSelector((state) => state?.flight);

  const params = useParams();
  const navigate = useNavigate();
console.log("paramsData", params)
  const dispatch = useDispatch();

  const [flightResult, setFlightResult] = useState([]);

  useEffect(() => {
    getFlight();
  }, [params?.scValue]);

  useEffect(() => {
    setFlightResult(flight?.Data);
  }, [flight]);

  console.log("flight data get", flight);

  const getFlight = async () => {
    if (params === null || params.scValue === null || params.scValue === "") {
      alert("Invalid Data");
      navigate("/searchflights");

      return;
    }
    try {
      const result = await getFlightData(params.scValue);
      console.log("result", result);
      if (result?.success === true && result?.data !== null) {
        dispatch(setResult(result?.data));
      } else {
        console.log("result error", result?.message);
        if (result?.message === "CALL_AGAIN") {
          getFlight();
        }
       
      }
    } catch (error) {
      console.log("errorMessage", error.message);
    }
  };

  return (
    <>
      <ModifySearch />
      <section className="flight_resultmain">
        {flightResult === null ? (
          <div>No data found</div>
        ) : (
          flightResult &&
          flightResult?.map((element) => {
            return <ResultBox flightinfo={element} sc={params?.scValue}/>;
          })
        )}
      </section>
    </>
  );
};

export default FlightResults;

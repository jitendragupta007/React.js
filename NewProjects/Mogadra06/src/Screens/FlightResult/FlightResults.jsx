import React, { useEffect, useState, useCallback } from "react";
import ResultBox from "../../Components/FlightResult/ResultBox/ResultBox";
import ModifySearch from "../../Components/FlightResult/ModifySearch/ModifySearch";
import { useParams, useNavigate } from "react-router-dom";
import { getFlightData } from "../../Utils/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { setResult } from "../../Store/FlightResultSlice";

const FlightResults = () => {
  const flightDataSlice = useSelector((state) => state?.flight?.data);
  const params = useParams();
  const navigate = useNavigate();
  console.log("paramsData", params);
  const dispatch = useDispatch();
  const [showModify, setShowModify] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const [selectedFwdPaths, setSelectedFwdPaths] = useState([])
  const [selectedRvrsePaths, setSelecetedRvrsePaths] = useState([])
  const [operatedBy,setOperatedBy]=useState([])


  const applyOperatedByFilter = useCallback(
    (data, operatedBy) => {
      return operatedBy?.length === 0
        ? data
        : data?.Data?.filter((flight) =>
            operatedBy?.some((type) => flight?.Airlinelists[0]?.includes(type))
          );
    },
    [operatedBy]
  );


console.log("OperatedBy", operatedBy)

  useEffect(() => {
    getFlight();
  }, [params?.scValue, operatedBy]);

  console.log("filteredData", filteredData);
  const handleModify = () => {
    setShowModify(!showModify);
  };

  const handleFilterShow = () => {
    setShowFilter(!showFilter);
  };

  console.log("flightDataSlice", flightDataSlice);
  console.log("FlightResult", flightDataSlice?.Data);

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

        let filterData = result?.data;
        filterData = applyOperatedByFilter(filterData, operatedBy)
        console.log("checkCheck",filterData)
        setFilteredData(filterData);

        console.log("resultFilteredData", filterData)
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
      <ModifySearch
        handleModify={handleModify}
        showModify={showModify}
        handleFilterShow={handleFilterShow}
        showFilter={showFilter}
        filteredData={flightDataSlice}
        selectedFwdPaths={selectedFwdPaths}
        setSelectedFwdPaths={setSelectedFwdPaths}
        selectedRvrsePaths={selectedRvrsePaths}
        setSelecetedRvrsePaths ={ setSelecetedRvrsePaths}
        operatedBy={operatedBy}
        setOperatedBy={setOperatedBy}
      />

      <section className="flight_resultmain">
        {filteredData?.Data === null ? (
          <div>No data found</div>
        ) : (
          filteredData?.Data &&
          filteredData?.Data?.map((element) => {
            return <ResultBox flightinfo={element} sc={params?.scValue} />;
          })
        )}
      </section>
    </>
  );
};

export default FlightResults;

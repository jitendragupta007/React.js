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
  const [selectedFwdPaths, setSelectedFwdPaths] = useState([]);
  const [operatedBy, setOperatedBy] = useState([]);
  const [selectedTotalTime, setSelectedTotalTime] = useState([]);

  console.log("forwardPaths", selectedFwdPaths);
  const applyFwdPathsFilter = useCallback(
    (data, selectedFwdPaths) => {
      return selectedFwdPaths?.length === 0
        ? data
        : data?.filter((element) => {
            console.log("TestingElement", element);
            return selectedFwdPaths?.some((path) => {
              console.log(
                "pathCode",
                element?.OutboundInboundlist[path?.index]?.flightlist?.length
              );
              return (
                path.code ==
                element?.OutboundInboundlist[path?.index]?.flightlist?.length
              );
            });
          });
    },
    [selectedFwdPaths]
  );

  //for total Journey
  const applyTotalTimeFilter = useCallback(
    (data, selectedTotalTime) => {
      const minValue = selectedTotalTime[0];
      const maxValue = selectedTotalTime[1];
      const index = selectedTotalTime[2];
      console.log("MINMAX", minValue, maxValue);
      return selectedTotalTime?.length === 0
        ? data
        : data?.filter((element) => {
            console.log("totalTime", element?.totaltime / 60);
            return (
              minValue <= element?.totaltime / 60 &&
              element?.totaltime / 60 <= maxValue
            );
          });
    },
    [selectedTotalTime]
  );

  //for Departure and Arrival
  // const applyTotalTimeFilter = useCallback(
  //   (data, selectedTotalTime) => {
  //     const minValue = selectedTotalTime[0];
  //     const maxValue = selectedTotalTime[1];
  //     const index = selectedTotalTime[2];
  //     console.log("MINMAX",minValue,maxValue)
  //     return selectedTotalTime?.length === 0
  //       ? data
  //       : data?.filter((element) => {
  //         console.log("totalTime",(element?.OutboundInboundlist[index]?.totaltime / 60) )
  //           return minValue <= (element?.OutboundInboundlist[index]?.totaltime / 60) && (element?.OutboundInboundlist[index]?.totaltime / 60) <= maxValue;
  //         });
  //   },
  //   [selectedTotalTime]
  // );

  const applyOperatedByFilter = useCallback(
    (data, operatedBy) => {
      return operatedBy?.length === 0
        ? data
        : data?.filter((flight) =>
            operatedBy?.some((type) => flight?.Airlinelists[0]?.includes(type))
          );
    },
    [operatedBy]
  );

  useEffect(() => {
    let filterData = flightDataSlice?.Data;
    filterData = applyOperatedByFilter(filterData, operatedBy);

    const filterData1 = applyTotalTimeFilter(filterData, selectedTotalTime);

    console.log("filterData1", filterData1);

    filterData = applyFwdPathsFilter(filterData, selectedFwdPaths);

    setFilteredData(filterData);
    console.log("resultFilteredData", filterData);
  }, [flightDataSlice, operatedBy, selectedTotalTime, selectedFwdPaths]);

  console.log("OperatedBy", operatedBy, "selectedTotalTime", selectedTotalTime);

  useEffect(() => {
    getFlight();
  }, [params?.scValue]);

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
        operatedBy={operatedBy}
        setOperatedBy={setOperatedBy}
        setSelectedTotalTime={setSelectedTotalTime}
      />

      <section className="flight_resultmain">
        {filteredData === null ? (
          <div>No data found</div>
        ) : (
          filteredData &&
          filteredData?.map((element) => {
            return <ResultBox flightinfo={element} sc={params?.scValue} />;
          })
        )}
      </section>
    </>
  );
};

export default FlightResults;

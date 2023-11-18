import { createContext, useContext, useState, useEffect } from "react";
import { hotelResults } from "../Utils/Auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResultContext = createContext();
const searchtoken = sessionStorage.getItem("searchToken") || "";
const apiUrl = `/Gethotelsearch`;

export function useResult() {
  return useContext(ResultContext);
}

export function ResultProvider({ children }) {
  const [resultData, setResultData] = useState([]);
  const navigate = useNavigate();

  //getData

  useEffect(() => {
    getResultData();
  }, [searchtoken]);

  const getResultData = async () => {
    const response = await hotelResults(searchtoken);
    if (response.success) {
      try {
        console.log("ResponseResult", response.data);
        setResultData(response?.data);
        navigate(`/result/${searchtoken}`, { state: { resultData } });
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

  return (
    <ResultContext.Provider
      value={{ resultData, getResultData, setResultData }}
    >
      {children}
    </ResultContext.Provider>
  );
}

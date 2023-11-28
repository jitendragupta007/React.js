import { createContext, useContext, useState } from "react";


const ResultContext = createContext();

export function useResult() {
  return useContext(ResultContext);
}

export function ResultProvider({ children }) {
  const [resultData, setResultData] = useState([]);

  return (
    <ResultContext.Provider
      value={{ resultData, setResultData }}
    >
      {children}
    </ResultContext.Provider>
  );
}

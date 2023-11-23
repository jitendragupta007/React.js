import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const HomePageContext = createContext();
const apiUrl = `https://vivantaholiday.com/home/get_home_page_data`;

export const useHomePage = () => {
  return useContext(HomePageContext);
};

export const HomePageProvider = ({ children }) => {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    try {
      const data = await axios.get(apiUrl);
      console.log(data);
      setHomeData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomePageContext.Provider value={ homeData }>
      {children}
    </HomePageContext.Provider>
  );
};

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


const ProfileContext = createContext();
const apiUrl = `https://api.charlieexchange.co/v1/user/profile`;
const authToken = sessionStorage.getItem("token");

export function useProfile() {
  return useContext(ProfileContext);
}

export function ProfileProvider({ children }) {
  const [profileData, setProfileData] = useState({});

   //getData
   useEffect(() => {
    getProfileData()
  }, []);
 
 
  const getProfileData = () => {
    axios
      .get(apiUrl, {
        headers: {
          Authorization: `${authToken}`,
        },
      })
      .then((response) => {
        setProfileData(response.data.data);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <ProfileContext.Provider value={{ profileData, getProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
}

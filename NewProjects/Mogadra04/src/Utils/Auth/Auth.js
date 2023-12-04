import axios from "axios";

// API POST
export const apiCallPost = async (url, param, headers) => {
  try {
    const response = await axios.post(url, param, { headers: headers });

    return response?.data;
  } catch (error) {
    return error;
  }
};

//Search Airport
export const searchAirport = (search) => {
    const url = "/Flight/airportsearch";
    const params = {
      search: search,
    };
    const headers = {
      ContentType: "application/json",
    };
  
    return apiCallPost(url, params, headers);
  };
  

//Search Flight

export const searchFlight = (search) => {
  console.log("search feacth", search);
  const url = "/Flight/searchflight";
  const params = search;
  const headers = {
    ContentType: "application/json",
  };

  return apiCallPost(url, params, headers);
};



//Get Flight
export const getFlightData = (search) => {

  const url = "/Flight/getflight1";
  const params = {
    sc: search  
  };
  const headers = {
    ContentType: "application/json",
  };

  return apiCallPost(url, params, headers);
}


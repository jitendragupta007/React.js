import axios from "axios";

//ApiCallPost
export const ApiCallPost = async (url, parameters, headers) => {
  try {
    const response = await axios.post(url, parameters, { headers: headers });
    console.log("response", response);

    return response.data;
  } catch (error) {
    console.log("Error", error);
    return error.response.data;
  }
};


//SearchCityData

export const searchData = (search) => {
  const url = `/hotel/gethotelsearchname`;

  const params = {
    search: search,
  };

  const headers = {
    ContentType: "application/json",
  };

  return ApiCallPost(url, params, headers);
};


// {
//   "destinationname": "Dubbo RSL Club Motel, Australia",
//   "searchtype": "hotel",
//   "package": "",
//   "destinationid": "465554",
//   "hotelbead_id": "465554",
//   "checkin": "22/12/2023",
//   "checkout": "23/12/2023",
//   "roomsdata": [
//     {
//       "roomno": 1,
//       "adults": "2",
//       "childs": "0",
//       "childrenages": []
//     }
//   ],
//   "nationality": "SD",
//   "supllier": "",
//   "countryname": "Australia",
//   "countrycode": "undefined"
// }


//searchHotels

export const searchHotels = (selected, fromDate, toDate,sliceRoomDetails) => {
  const url = `/Gethotelsearchid`;

  const params = {
    destinationname:selected.cityname,
    searchtype: selected.searchtype,
    destinationid:selected.code,
    hotelbead_id:selected.code,
    checkin: fromDate,
    checkout: toDate,
    roomsdata:sliceRoomDetails,
    nationality: "IN",
    countryname: selected.countryname,
   
  };

  const headers = {
    ContentType: "application/json",
  };

  return ApiCallPost(url, params, headers);
};


//"d4441e4f-8103-4459-bc65-a1fe33d772f7"
//Search Hotel Results
export const hotelResults = (searchtoken) => {
  console.log("searchTokenTest",searchtoken)
  const url = `/Gethotelsearch`;

  const params = {
    searchtoken:searchtoken,//"7cc56e91-d7f6-4d63-bc70-b1bf23828c76" ,
  };

  const headers = {
    ContentType: "application/json",
  };

  return ApiCallPost(url, params, headers);
};


//api/detail
export const hotelDetails = (searchtoken,hotelid) => {
  const url = `/gethotel`;

  const params = {
   searchtoken: searchtoken,
    hotelid: hotelid
  };

  const headers = {
    ContentType: "application/json",
  };

  return ApiCallPost(url, params, headers);
};
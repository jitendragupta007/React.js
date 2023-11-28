import React, { useEffect } from "react";
import BackBTNBar from "../../Components/HotelDetails/BackBTNBar/BackBTNBar";
import HotelDateBar from "../../Components/HotelDetails/HotelDateBar/HotelDateBar";
import IMGSlider from "../../Components/HotelDetails/IMGSlider/IMGSlider";
import ContentInfo from "../../Components/HotelDetails/ContentInfo/ContentInfo";
import { Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hotelDetails } from "../../Utils/Auth";
import { addSelectedHotelDetails } from "../../Store/SelectedHotelSlice";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

const HotelDetails = () => {
  const selectedRoomData = useSelector(
    (store) => store?.SelectedHotel?.data[0]
  );
  console.log("SliceSelectedRoomData", selectedRoomData);
  const params = useParams();
  const dispatch = useDispatch();
  const searchtoken = sessionStorage.getItem("searchToken");
  const navigate = useNavigate();

  console.log("searchToken", searchtoken)
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await hotelDetails(searchtoken, params.hotelid);
    if (result.success) {
      try {
        console.log("detailsResult", result);
        dispatch(addSelectedHotelDetails(result));

      } catch (error) {
        console.log("error:", error);
        toast(error)
        navigate(`/result/searchtoken`)

      }
    } else {
      console.log("Error:");
      toast("No data found")
      navigate(`/result/searchtoken`)
     
    }
  };

  return (
    <div>
      <BackBTNBar selectedRoomData={selectedRoomData} />
      <HotelDateBar selectedRoomData={selectedRoomData} />
      <IMGSlider selectedRoomData={selectedRoomData} />
      <ContentInfo selectedRoomData={selectedRoomData} />
      <Outlet />
    </div>
  );
};

export default HotelDetails;

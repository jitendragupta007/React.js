import { configureStore } from "@reduxjs/toolkit";
import SearchParamsReducer from "./SearchParamsSlice"
import RoomDetailsReducer from "./RoomDetailsSlice"
import SelectedHotelReducer from "./SelectedHotelSlice";

const MainStore = configureStore({
    reducer: {
        SearchParams: SearchParamsReducer,
        RoomDetails: RoomDetailsReducer,
        SelectedHotel:SelectedHotelReducer,
   }

});

export default MainStore;
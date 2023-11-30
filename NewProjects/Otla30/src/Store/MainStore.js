import { configureStore } from "@reduxjs/toolkit";
import SearchParamsReducer from "./SearchParamsSlice"
import RoomDetailsReducer from "./RoomDetailsSlice"
import SelectedHotelReducer from "./SelectedHotelSlice";
import SelectedRoomReducer from "./SelectedRoomSlice";


const MainStore = configureStore({
    reducer: {
        SearchParams: SearchParamsReducer,
        RoomDetails: RoomDetailsReducer,
        SelectedHotel: SelectedHotelReducer,
        SelectedRoom: SelectedRoomReducer,
   }

});

export default MainStore;
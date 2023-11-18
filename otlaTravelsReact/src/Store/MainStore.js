import { configureStore } from "@reduxjs/toolkit";
import SearchParamsReducer from "./SearchParamsSlice"
import RoomDetailsReducer from "./RoomDetailsSlice"

const MainStore = configureStore({
    reducer: {
        SearchParams: SearchParamsReducer,
        RoomDetails: RoomDetailsReducer,
   }

});

export default MainStore;
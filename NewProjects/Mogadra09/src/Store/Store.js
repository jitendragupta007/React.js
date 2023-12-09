import { configureStore, createReducer } from "@reduxjs/toolkit";
import flightReducer from "./FlightResultSlice";
const store = configureStore({
    reducer: {
        flight: flightReducer,
    },
});

export default store;
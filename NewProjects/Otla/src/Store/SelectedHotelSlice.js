import { createSlice } from "@reduxjs/toolkit";

const SelectedHotelSlice = createSlice({
  name: "SelectedHotel",
  initialState: {
    data:{},
  },
  reducers: {
    addSelectedHotelDetails: (state, action) => {
     
    },
  },
});

export const { addSelectedHotelDetails} =SelectedHotelSlice.actions;
export default SelectedHotelSlice.reducer;

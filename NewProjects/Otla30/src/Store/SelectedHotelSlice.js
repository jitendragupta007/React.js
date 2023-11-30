import { createSlice } from "@reduxjs/toolkit";

const SelectedHotelSlice = createSlice({
  name: "SelectedHotel",
  initialState: {
    data: [],
  },
  reducers: {
    addSelectedHotelDetails: (state, action) => {
      if (state?.data?.length !== 0) {
        state?.data?.pop();
        state?.data?.push(action.payload);
      } else {
        state?.data.push(action.payload);
      }
    },
  },
});

export const { addSelectedHotelDetails } = SelectedHotelSlice.actions;
export default SelectedHotelSlice.reducer;

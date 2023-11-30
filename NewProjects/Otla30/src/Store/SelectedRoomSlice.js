import { createSlice } from "@reduxjs/toolkit";

const SelectedRoomSlice = createSlice({
  name: "SelectedRoom",
  initialState: {
    data: [],
  },
  reducers: {
    addSelectedRoomDetails: (state, action) => {
      console.log("selectRoomAP", action.payload);

      if (state?.data?.length !== 0) {
        state?.data?.pop();
        state?.data?.push(action.payload);
      } else {
        state?.data.push(action.payload);
      }
    },
  },
});

export const { addSelectedRoomDetails } = SelectedRoomSlice.actions;
export default SelectedRoomSlice.reducer;

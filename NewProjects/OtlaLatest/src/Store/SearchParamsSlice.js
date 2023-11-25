import { createSlice } from "@reduxjs/toolkit";

const SearchParamsSlice = createSlice({
  name: "SearchParams",
  initialState: {
    data: [],
  },
  reducers: {
    addInfo: (state, action) => {
      if (state.data.length != 0) {
        state.data.pop();
            }
          if (action.payload !== undefined) {
            state.data=[...action.payload]
       }

    },
  },
});

export const { addInfo } = SearchParamsSlice.actions;
export default SearchParamsSlice.reducer;

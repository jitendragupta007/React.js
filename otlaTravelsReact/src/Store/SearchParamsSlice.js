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
            state.data.push(action.payload)
        }
    }
})

export const { addInfo } = SearchParamsSlice.actions;
export default SearchParamsSlice.reducer;
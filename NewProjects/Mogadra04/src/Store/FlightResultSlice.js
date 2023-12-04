const { createSlice } = require("@reduxjs/toolkit");


const flightResultSlice = createSlice({
    name: "flightResult",
    initialState: {
        data: {},
    },
    reducers: {

        setResult(state, action) {
            console.log("flightResult", action.payload);
            state.data = action.payload;
        },


    },
});

export const { setResult } = flightResultSlice.actions;
export default flightResultSlice.reducer;
import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

//configuring store is a redux job.
const appStore = configureStore({
 reducer:{                 //it's a big reducer. It contains all the reducers from different slices.
  cart : cartReducer,
 }



});



export default appStore;
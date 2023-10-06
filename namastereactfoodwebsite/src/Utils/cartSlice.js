import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
  name: 'cart',  //first configuration
  initialState: {
     items: []
},



  reducers:{    //reducer function modifies the slice and our cart
  addItem :(state, action)=>{   //(state = initial state) here
    //we are mutating the state here
    //reducer function 
    //this state will get access to the upper initial state data.
    //it will also get access to this action.
    //it modifies the state based on our action.
    state.items.push(action.payload);  //initialState.items.push(action.payload)
  },

  removeItem:(state,action) => {

    console.log("stateItemssss",state.items)
  //  state.items.filter((element)=>{
  //   console.log("removedId", element?.info?.id)
  //   console.log("state.items", element?.info)
  //   return Number(element?.info?.id) !== action.payload; 

   
// })
 
  },

  clearCart:(state,action) => {
    state.items = [];
  },

  
}
})



export const {addItem, removeItem, clearCart} = cartSlice.actions;  //we have exported our actions

export default cartSlice.reducer;                                   // we have exported our reducer
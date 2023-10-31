import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart", //first configuration
  initialState: {
    items: [],
  },

  reducers: {
    //reducer function modifies the slice and our cart
    addItem: (state, action) => {
      //(state = initial state) here

      let find = state.items?.findIndex(
        (item) => item.info.id === action.payload.info.id
      );
      if (find >= 0) {
        toast.warn("Product is already in the cart");
        // state.items[find].info.quantity++
      } else {
        toast.success("product added to the cart successfully");
        //we are mutating the state here
        //reducer function
        //this state will get access to the upper initial state data.
        //it will also get access to this action.
        //it modifies the state based on our action.
        state.items.push(action.payload); //initialState.items.push(action.payload)
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((element) => {
        console.log("action.payload", action.payload);
        return element.info?.id !== action.payload;
      });
    },

    increment: (state, action) => {
      let find = state.items?.findIndex(
        (item) => item.info.id === action.payload
      );
      if (find >= 0) {
        state.items[find].info.quantity = state.items[find].info.quantity + 1;
      } else {
        state.items[find].info.quantity = state.items[find].info.quantity + 0;
      }
    },

    decrement: (state, action) => {
      let find = state.items?.findIndex(
        (item) => item.info.id === action.payload
      );

      if (state.items[find].info.quantity > 1) {
        if (find >= 0) {
          state.items[find].info.quantity = state.items[find].info.quantity - 1;
        } else {
          state.items[find].info.quantity = state.items[find].info.quantity - 0;
        }
      } else {
        state.items = state.items.filter((element) => {
          return element.info?.id !== action.payload;
        });
      }
    },

    clearCart: (state, action) => {
      state.items = [];
    },

    cartTotal: (state) => {
      let total = 0;
      state.items.forEach((element) => {
        total += (element?.info?.feeDetails?.totalFee / 10) * (element?.info?.quantity);
      });

      state.totalPrice = total;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increment,
  decrement,
  cartTotal,
} = cartSlice.actions; //we have exported our actions

export default cartSlice.reducer; // we have exported our reducer

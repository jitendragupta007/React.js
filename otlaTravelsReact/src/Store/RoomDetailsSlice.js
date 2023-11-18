import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const RoomDetailsSlice = createSlice({
  name: "RoomDetails",
  initialState: {
    rooms: [{ roomno: 1, adults: 1, childs: 0, childenAges: [] }],
  },
  reducers: {
    addRoom: (state, action) => {
      if (state.rooms.length === 4) {
        toast.warn("Sorry, You Cann't add more than 4 rooms at a time.")
        return;
      }
      const newRoomId = state.rooms.length + 1;

      state.rooms = [
        ...state.rooms,
        {
          roomno: newRoomId,
          adults: 1,
          childs: 0,
          childrenAges: [],
        },
      ];
    },

    removeRoom: (state, action) => {
      if (state.rooms.length > 1) {
        const newState = state?.rooms.filter((element) => {
          console.log("elementId", element.id);
          return element.roomno !== action.payload;
        });

        state.rooms = [...newState];
      }
    },

    increaseAdult: (state, action) => {
      const roomIdToIncrease = action.payload.roomno;

      const roomIndex = state.rooms.findIndex(
        (room) => room.roomno === roomIdToIncrease
      );

      if (roomIndex !== -1) {
        state.rooms[roomIndex].adults += 1;
      }
    },

    decreaseAdult: (state, action) => {
      const roomIdToDecrease = action.payload.roomno;

      const roomIndex = state.rooms.findIndex(
        (room) => room.roomno === roomIdToDecrease
      );

      if (roomIndex !== -1 && state.rooms[roomIndex].adults > 1) {
        state.rooms[roomIndex].adults -= 1;
      } else {
        toast.warn("At least one adult should be there in the room");
      }
    },

    increaseChild: (state, action) => {
      const roomIdToIncrease = action.payload.roomno;

      const roomIndex = state.rooms.findIndex(
        (room) => room.roomno === roomIdToIncrease
      );

      if (roomIndex !== -1 && action.payload.childs < 4) {
        state.rooms[roomIndex].childs += 1;
      } else {
        toast.warn("More than 4 children are not allowed in A room.");
      }
    },

    decreaseChildren: (state, action) => {
      console.log("decreaseChildrenCalled");
      const roomIdToDecrease = action.payload.roomno;

      const roomIndex = state.rooms.findIndex(
        (room) => room.roomno === roomIdToDecrease
      );

      if (roomIndex !== -1 && state.rooms[roomIndex].childs > 0) {
        state.rooms[roomIndex].childs -= 1;
      }
    },

    totalPassengers: (state, action) => {
      let adultCount = 0;
      let childCount = 0;
      let totalRooms = state.rooms.length;
      state.rooms?.forEach((element) => {
        adultCount += element?.adults 
        childCount += element?.childs
      });
      state.totalAdults = adultCount;
      state.totalChildren = childCount
      state.totalRooms = totalRooms;
    },
  },
});

export const {
  addRoom,
  removeRoom,
  increaseAdult,
  decreaseAdult,
  increaseChild,
  decreaseChildren,
  totalPassengers,
} = RoomDetailsSlice.actions; //we have exported our actions

export default RoomDetailsSlice.reducer;

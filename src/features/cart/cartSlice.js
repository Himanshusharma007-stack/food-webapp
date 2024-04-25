import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let indexOfItem = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (indexOfItem < 0) {
        state.items.push({ ...action.payload, count: 1 });
      } else {
        state.items[indexOfItem] = {
          ...state.items[indexOfItem],
          count: state.items[indexOfItem]["count"] + 1,
        };
      }
    },
    removeFromCart: (state, action) => {
      let indexOfItem = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (indexOfItem < 0) {
        state.items.push({ ...action.payload, count: 0 });
      } else {
        state.items[indexOfItem] = {
          ...state.items[indexOfItem],
          count: state.items[indexOfItem]["count"] - 1,
        };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice, createSelector } from "@reduxjs/toolkit";

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
      if (state.items[indexOfItem]["count"] == 1) {
        state.items.splice(indexOfItem, 1);
      } else {
        state.items[indexOfItem] = {
          ...state.items[indexOfItem],
          count: state.items[indexOfItem]["count"] - 1,
        };
      }
    },
    deleteFromCart: (state, action) => {
      let indexOfItem = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      state.items.splice(indexOfItem, 1);
    },
  },
});

export const getTotalAmount = createSelector(
  (state) => state.cart.items,
  (items) =>
    items.reduce(
      (accumulator, { price, count }) => accumulator + price * count,
      0
    )
);

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;

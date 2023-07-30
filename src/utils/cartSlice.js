import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.card.info.id;
      let found = false;
      state.items = state.items.filter((item) => {
        if (!found && item.card.info.id === itemIdToRemove) {
          found = true;
          return false;
        }
        return true;
      });
    },
    clearCart: (state, action) => {
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

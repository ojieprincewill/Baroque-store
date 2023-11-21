import { createSlice } from "@reduxjs/toolkit";
import { toggleWishItem } from "./wish.utils";

const initialState = {
  hidden: true,
  wishItems: [],
};

export const WishSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    toggleWishDisplay: (state) => {
      state.hidden = !state.hidden;
    },
    toggleWishItems: (state, action) => {
      state.wishItems = toggleWishItem(state.wishItems, action.payload);
    },
    removeWishItem: (state, action) => {
      state.wishItems = state.wishItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearWishList: (state) => {
      state.wishItems = [];
    },
  },
});

export const {
  toggleWishDisplay,
  toggleWishItems,
  clearWishList,
  removeWishItem,
} = WishSlice.actions;
export default WishSlice.reducer;

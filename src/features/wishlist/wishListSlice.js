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
  },
});

export const { toggleWishDisplay, toggleWishItems } = WishSlice.actions;
export default WishSlice.reducer;

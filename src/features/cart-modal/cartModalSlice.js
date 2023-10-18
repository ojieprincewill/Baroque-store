import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: true,
};

export const CartModalSlice = createSlice({
  name: "cartModal",
  initialState,
  reducers: {
    toggleCartModal: (state) => !state,
  },
});

export const { toggleCartModal } = CartModalSlice.actions;
export default CartModalSlice.reducer;

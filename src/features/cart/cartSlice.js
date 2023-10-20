import { createSlice } from "@reduxjs/toolkit";
import { addItemsToCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartDisplay: (state) => !state,
    addItem: (state, action) => {
      state.cartItems = addItemsToCart(state.cartItems, action.payload);
    },
  },
});

export const { toggleCartDisplay, addItem } = CartSlice.actions;
export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
import { firestore, auth } from "../../firebase/firebase.utils";
import { doc, setDoc } from "firebase/firestore";

const initialState = {
  hidden: true,
  cartItems: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartDisplay: (state) => {
      state.hidden = !state.hidden;
    },
    addItem: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
      updateCartProfile(state.cartItems);
    },
    removeItem: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, action.payload);
      updateCartProfile(state.cartItems);
    },
    clearItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      updateCartProfile(state.cartItems);
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    resetCart: (state) => {
      state.cartItems = [];
    },
    mergeCarts: (state) => {
      const localCartItems =
        JSON.parse(localStorage.getItem("guestCart")) || [];
      state.cartItems = [...state.cartItems, ...localCartItems];
      localStorage.removeItem("guestCart");
    },
  },
});

const updateCartProfile = async (cartItems) => {
  const user = auth.currentUser;

  if (user) {
    try {
      const userRef = doc(firestore, `users/${user.uid}`);
      setDoc(userRef, { cart: cartItems }, { merge: true });
    } catch (error) {
      console.error("Error updating profile", error);
    }
  }
};

export const {
  toggleCartDisplay,
  addItem,
  clearItem,
  removeItem,
  setCartItems,
  resetCart,
  mergeCarts,
} = CartSlice.actions;
export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { toggleWishItem } from "./wish.utils";
import { firestore, auth } from "../../firebase/firebase.utils";
import { doc, setDoc } from "firebase/firestore";

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
      updateWishProfile(state.wishItems);
    },
    removeWishItem: (state, action) => {
      state.wishItems = state.wishItems.filter(
        (item) => item.id !== action.payload.id
      );
      updateWishProfile(state.wishItems);
    },
    setWishItems: (state, action) => {
      state.wishItems = action.payload;
    },
    resetWishList: (state) => {
      state.wishItems = [];
    },
  },
});

export const updateWishProfile = async (wishListItems) => {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(firestore, `users/${user.uid}`);
    setDoc(userRef, { wishList: wishListItems }, { merge: true });
  }
};

export const {
  toggleWishDisplay,
  toggleWishItems,
  removeWishItem,
  setWishItems,
  resetWishList,
} = WishSlice.actions;
export default WishSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { toggleWishItem } from "./wish.utils";
import { firestore, auth } from "../../firebase/firebase.utils";
import { doc, setDoc } from "firebase/firestore";

const initialState = {
  hidden: true,
  wishListItems: [],
};

export const WishSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    toggleWishDisplay: (state) => {
      state.hidden = !state.hidden;
    },
    toggleWishListItems: (state, action) => {
      state.wishListItems = toggleWishItem(state.wishListItems, action.payload);
      updateUserWishProfile(state.wishListItems);
      updateLocalWishlistStorage(state.wishListItems);
    },
    removeWishItem: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== action.payload.id
      );
      updateUserWishProfile(state.wishListItems);
      updateLocalWishlistStorage(state.wishListItems);
    },
    setWishListItems: (state, action) => {
      state.wishListItems = action.payload;
    },
    resetWishList: (state) => {
      state.wishListItems = [];
    },
    toggleSelectWishItem: (state, action) => {
      const { id } = action.payload;
      const item = state.wishListItems.find((item) => item.id === id);

      if (item) {
        item.selected = !item.selected;
      }
    },
    mergeWishlists: (state) => {
      const localWishlistItems =
        JSON.parse(localStorage.getItem("guestWishlist")) || [];

      const existingWishlistItems = Array.isArray(state.wishListItems)
        ? state.wishListItems
        : [];

      state.wishListItems = [...existingWishlistItems, ...localWishlistItems];
      updateUserWishProfile(state.wishListItems);
      localStorage.removeItem("guestWishlist");
    },
  },
});

export const updateUserWishProfile = async (wishListItems) => {
  const user = auth.currentUser;

  if (user) {
    try {
      const userRef = doc(firestore, `users/${user.uid}`);
      setDoc(userRef, { wishList: wishListItems }, { merge: true });
    } catch (error) {
      console.error("Error updating profile", error);
    }
  }
};

export const updateLocalWishlistStorage = (wishListItems) => {
  localStorage.setItem("guestWishlist", JSON.stringify(wishListItems));
};

export const {
  toggleWishDisplay,
  toggleWishListItems,
  removeWishItem,
  setWishListItems,
  resetWishList,
  toggleSelectWishItem,
  mergeWishlists,
} = WishSlice.actions;
export default WishSlice.reducer;

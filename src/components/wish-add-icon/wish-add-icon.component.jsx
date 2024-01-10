import React from "react";

import "./wish-add-icon.styles.scss";

import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishListItems } from "../../features/wishlist/wishListSlice";
import { updateLocalWishlistStorage } from "../../features/wishlist/wishListSlice";

const WishAdd = ({ product }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const wishItems = useSelector((state) => state.wishList.wishListItems);
  const isItemInWishList = wishItems.some((item) => item.id === product.id);

  const handleToggleWishItemClick = () => {
    if (!currentUser) {
      updateLocalWishlistStorage([...wishItems, product]);
    }

    dispatch(toggleWishListItems(product));
  };
  return (
    <div
      className={`wishlist-icon ${isItemInWishList ? "active" : ""}`}
      onClick={handleToggleWishItemClick}
    >
      {isItemInWishList ? <FaHeart /> : <FaRegHeart />}
    </div>
  );
};

export default WishAdd;

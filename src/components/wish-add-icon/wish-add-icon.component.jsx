import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishItems } from "../../features/wishlist/wishListSlice";

const WishAdd = ({ product }) => {
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.wishList.wishItems);
  const isItemInWishList = wishItems.some((item) => item.id === product.id);

  const handleToggleWishItemClick = () => {
    dispatch(toggleWishItems(product));
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

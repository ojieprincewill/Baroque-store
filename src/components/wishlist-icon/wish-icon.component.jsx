import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishDisplay } from "../../features/wishlist/wishListSlice";

const WishIcon = () => {
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.wishList.wishListItems);
  const wishCount =
    Array.isArray(wishItems) && wishItems.length > 0
      ? wishItems.reduce(
          (accumulatedQuantity, wishItem) =>
            accumulatedQuantity + wishItem.quantity,
          0
        )
      : 0;

  const handleWishIconClick = () => {
    dispatch(toggleWishDisplay());
  };
  return (
    <div className="hearticon" onClick={handleWishIconClick}>
      <FaRegHeart className="shopping-icon" />
      <div className="item-count">{wishCount}</div>
    </div>
  );
};

export default WishIcon;

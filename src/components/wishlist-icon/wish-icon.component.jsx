import React from "react";
import { FaRegHeart } from "react-icons/fa";

const WishIcon = () => {
  return (
    <div className="hearticon">
      <FaRegHeart className="shopping-icon" />
      <div className="item-count">0</div>
    </div>
  );
};

export default WishIcon;

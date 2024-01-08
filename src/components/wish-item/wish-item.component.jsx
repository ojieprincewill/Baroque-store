import React, { useState } from "react";

import "./wish-item.styles.scss";
import { useDispatch } from "react-redux";
import { removeWishItem } from "../../features/wishlist/wishListSlice";
import { AiOutlineClose } from "react-icons/ai";

const WishItem = ({ product, onSelect }) => {
  const { id, image, price, title } = product;
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    onSelect(id, !isSelected);
  };

  const removeItemFromWishlist = () => {
    dispatch(removeWishItem(product));
  };

  return (
    <div className="wish-item">
      <div className="check-cont">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={toggleSelection}
          id={`checkbox-${id}`}
        />
        <label htmlFor={`checkbox-${id}`}></label>
      </div>
      <div className="wish-image-cont">
        <img src={image} alt="product" className="wishimage" />
        <div className="wishoverlay-cont">
          <AiOutlineClose
            className="wishoverlay-close"
            onClick={removeItemFromWishlist}
          />
        </div>
      </div>
      <div className="product-details">
        <span className="title">{title}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default WishItem;

import React from "react";

import "./wish-item.styles.scss";
import { useDispatch } from "react-redux";
import { removeWishItem } from "../../features/wishlist/wishListSlice";
import { AiOutlineClose } from "react-icons/ai";

const WishItem = ({ products }) => {
  const { image, price, title } = products;
  const dispatch = useDispatch();

  const removeItemFromWishlist = () => {
    dispatch(removeWishItem(products));
  };

  return (
    <div className="cart-item">
      <div className="cartimage-cont">
        <img src={image} alt="product" className="cartimage" />
        <div className="overlay-cont">
          <AiOutlineClose
            className="overlay-close"
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

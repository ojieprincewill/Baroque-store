import React from "react";

import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import { clearItem, addItem, removeItem } from "../../features/cart/cartSlice";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { title, image, price, quantity } = cartItem;

  const handleClearItemClick = () => {
    dispatch(clearItem(cartItem));
  };

  const handleAddItemClick = () => {
    dispatch(addItem(cartItem));
  };

  const handleRemoveItemClick = () => {
    dispatch(removeItem(cartItem));
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <span className="title">{title}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItemClick}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItemClick}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItemClick}>
        &#10006;
      </div>
    </div>
  );
};

export default CheckoutItem;

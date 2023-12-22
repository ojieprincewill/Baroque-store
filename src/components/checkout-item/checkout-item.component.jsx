import React from "react";

import "./checkout-item.styles.scss";

import { useDispatch } from "react-redux";
import { clearItem } from "../../features/cart/cartSlice";
import QuantityControl from "../quantity-control/quantity-control.component";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { title, image, price } = cartItem;

  const handleClearItemClick = () => {
    dispatch(clearItem(cartItem));
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" className="checkout-image" />
      </div>
      <span className="title">{title}</span>
      <span className="quantity">
        <QuantityControl cartItem={cartItem} />
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={handleClearItemClick}>
        &#10006;
      </div>
    </div>
  );
};

export default CheckoutItem;

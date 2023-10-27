import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItems: { title, image, price, quantity } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={image} alt="item" />
      </div>
      <span className="title">{title}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;

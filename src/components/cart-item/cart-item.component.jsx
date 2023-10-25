import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ product: { image, price, title, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={image} alt="product" />
      <div className="product-details">
        <span className="title">{title}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

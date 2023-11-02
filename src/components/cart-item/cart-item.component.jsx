import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ products: { image, price, title, quantity } }) => {
  return (
    <div className="cart-item">
      <div className="cartimage-cont">
        <img src={image} alt="product" className="cartimage" />
      </div>
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

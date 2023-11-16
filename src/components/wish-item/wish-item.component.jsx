import React from "react";

import "./wish-item.styles.scss";

const WishItem = ({ products: { image, price, title } }) => {
  return (
    <div className="cart-item">
      <div className="cartimage-cont">
        <img src={image} alt="product" className="cartimage" />
      </div>
      <div className="product-details">
        <span className="title">{title}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};

export default WishItem;

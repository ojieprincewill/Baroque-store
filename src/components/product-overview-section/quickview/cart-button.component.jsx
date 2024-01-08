import React from "react";

import "./cart-button.styles.scss";

const CartButton = ({ onAddToCart }) => {
  return (
    <div className="btn-container">
      <button className="sub-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;

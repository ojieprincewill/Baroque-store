import React from "react";

import "./check-out.styles.scss";

import CheckoutItem from "../checkout-item/checkout-item.component";

import { useSelector } from "react-redux";

const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItems={cartItem} />
      ))}

      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default CheckOut;

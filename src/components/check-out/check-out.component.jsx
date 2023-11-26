import React from "react";

import "./check-out.styles.scss";

import CheckoutItem from "../checkout-item/checkout-item.component";

import { useSelector } from "react-redux";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../stripe/checkout-form.component";

const stripePromise = loadStripe(
  "pk_test_51O6ui2KExLrHckCXzO8uYY7G6ZyeigHXwxWm9D3FMBcIOo4lR9vnjd0UbE4hGTpkQk1wJBq3locknZmD3rmttD1s0046a8QhkV"
);

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
        <p className="header-block">Product</p>
        <p className="header-block">Description</p>
        <p className="header-block">Quantity</p>
        <p className="header-block">Price</p>
        <p className="header-block">Remove</p>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following credit card for testing*
        <br />
        4242 4242 4242 4242 - Exp: 12/24 - CVC: 323
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={cartTotal} />
      </Elements>
    </div>
  );
};

export default CheckOut;

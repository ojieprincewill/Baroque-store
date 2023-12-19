import React from "react";

import "./check-out.styles.scss";

import CheckoutItem from "../checkout-item/checkout-item.component";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../stripe/checkout-form.component";

const stripePromise = loadStripe(
  "pk_test_51O6ui2KExLrHckCXzO8uYY7G6ZyeigHXwxWm9D3FMBcIOo4lR9vnjd0UbE4hGTpkQk1wJBq3locknZmD3rmttD1s0046a8QhkV"
);

const countries = ["Uk", "USA", "Iceland"];

const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
  return (
    <>
      <div className="breadcrumbs">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="breadlink"
        >
          Home <span className="arrow">{">"}</span>
        </Link>{" "}
        <span className="breadtitle">Checkout</span>
      </div>
      <div className="checkout">
        <div className="checkout-wrapper">
          <div className="checkout-header">
            <span className="header-block">Product</span>
            <span className="header-block">Description</span>
            <span className="header-block">Quantity</span>
            <span className="header-block">Price</span>
            <span className="header-block">Remove</span>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="billing-wrapper">
          <p className="billing-title">Cart Totals</p>
          <div className="total-amount">
            <p className="sub-title">Sub-total:</p>
            <p className="total">${cartTotal}</p>
          </div>
          <div>
            <div className="shipping-details-cont">
              <p className="subtitle">Shipping:</p>
              <div>
                <p className="shipping-text">
                  There are no shipping methods available. Please double check
                  your address, or contact us if you need any help.
                </p>

                <p className="label">Calculate Shipping</p>
                <div className="select-cont">
                  <select
                    id="country"
                    defaultValue=""
                    className="country-select"
                  >
                    <option value="" disabled className="country-option">
                      Select count...
                    </option>
                    {countries.map((country, index) => (
                      <option
                        key={index}
                        value={country}
                        className="country-option"
                      >
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="State / Country"
                    className="ship-form-input"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Postcode / Zip"
                    className="ship-form-input"
                  />
                </div>
              </div>
            </div>
            <div className="overall-amount">
              <p className="sub-title">Total:</p>
              <p className="total">${cartTotal}</p>
            </div>
            <Elements stripe={stripePromise}>
              <CheckoutForm price={cartTotal} />
            </Elements>
          </div>
        </div>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: 12/24 - CVC: 323
      </div>
    </>
  );
};

export default CheckOut;

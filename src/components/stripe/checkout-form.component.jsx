import React, { useState } from "react";

import "./checkout-form.styles.scss";

import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const priceInCents = Math.round(price * 100);
  const [showForm, setShowForm] = useState(false);

  const cardElementOptions = {
    style: {
      base: {
        color: "#888",
        borderBottom: "1px solid #ccc",
        fontSize: "16px",
        iconColor: "#7685e6",
        lineHeight: "40px",
        "::placeholder": {
          color: "#888",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode: true,
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
    } else {
      try {
        const response = await axios.post("http://localhost:5000/charge", {
          amount: priceInCents,
          currency: "usd",
          source: token.id,
        });

        const data = await response.data;

        if (data.message === "Payment successful") {
          console.log("Payment successful");
          alert("Your payment was successful");
        } else {
          console.log("Payment unsucessful");
          alert(
            "There was an issue with your payment. Please make sure you use the provided credit card"
          );
        }
      } catch (error) {
        console.log("Payment error: ", error);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setShowForm((prevShowForm) => !prevShowForm)}
        className="paymentform-button"
      >
        {showForm ? "Close Form" : "Payment Form"}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="card-element-container">
          <div className="element-container">
            <CardElement options={cardElementOptions} />
          </div>
          <button type="submit" disabled={!stripe} className="checkout-button">
            Pay Now
          </button>
        </form>
      )}
    </>
  );
};

export default CheckoutForm;

import React, { useState } from "react";

import "./checkout-form.styles.scss";

import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
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

    const { token, error } = await stripe.createToken(
      elements.getElement(CardElement)
    );

    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      console.log(token);
      alert("Payment Successful");
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

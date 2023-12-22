import React, { useState } from "react";

import "./checkout-form.styles.scss";

import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/cartSlice";

import axios from "axios";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const priceInCents = Math.round(price * 100);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [isProcessing, setProcessing] = useState(false);
  const dispatch = useDispatch();

  const cardElementOptions = {
    style: {
      base: {
        color: "#777",
        borderBottom: "1px solid #ccc",
        fontSize: "16px",
        iconColor: "#7685e6",
        lineHeight: "40px",
        "::placeholder": {
          color: "#555",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode: true,
  };

  const handleShowForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || isProcessing) {
      return;
    }

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error);
      setProcessing(false);
    } else {
      try {
        const response = await axios.post(
          "https://baroque-server-keme-armstrong.onrender.com/charge",
          {
            amount: priceInCents,
            currency: "usd",
            source: token.id,
          }
        );

        const data = await response.data;

        if (data.message === "Payment successful") {
          console.log("Payment successful");
          navigate("/success");

          setTimeout(() => {
            dispatch(resetCart());
          }, 5000);
        } else {
          console.log("Payment not successful");
          alert("There was an issue with your payment! Please try again.");
        }
      } catch (error) {
        console.log("Payment error: ", error);
      } finally {
        setProcessing(false);
      }
    }
  };

  return (
    <>
      <button
        onClick={handleShowForm}
        className={`paymentform-button ${showForm ? "active" : ""}`}
        disabled={isProcessing}
      >
        {showForm ? "Close" : "Proceed with payment"}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="card-element-container">
          <div className="element-container">
            <CardElement options={cardElementOptions} />
          </div>
          <button
            type="submit"
            disabled={!stripe || isProcessing}
            className="checkout-button"
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>
        </form>
      )}
    </>
  );
};

export default CheckoutForm;

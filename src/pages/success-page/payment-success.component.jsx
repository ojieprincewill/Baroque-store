import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import "./payment-success.styles.scss";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      navigate("/account/orders");
    }, 5000);

    return () => {
      clearInterval(countdownInterval);
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  useEffect(() => {
    controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });
  }, [controls]);

  return (
    <div className="payment-success">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={controls}
        exit={{ y: "100%", opacity: 0 }}
      >
        <p className="success-header">Congrats!</p>
        <p className="success-text">The payment was processed successfully</p>
        <p className="redirect">Redirecting in {countdown}s...</p>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;

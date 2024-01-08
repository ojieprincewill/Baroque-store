import React from "react";

import "./quick-buttons.styles.scss";

const QuickButtons = ({ handleContinueShopping, handleGoToCheckout }) => {
  return (
    <div className="quick-btn-cont">
      <button className="quick-btn" onClick={handleContinueShopping}>
        Continue Shopping
      </button>
      <button className="quick-btn" onClick={handleGoToCheckout}>
        Go to Checkout
      </button>
    </div>
  );
};

export default QuickButtons;

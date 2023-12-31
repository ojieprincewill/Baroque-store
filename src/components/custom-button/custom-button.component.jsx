import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? "google-signin" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

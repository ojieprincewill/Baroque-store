import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, type, ...otherProps }) => {
  const isPasswordInput = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        type={isPasswordInput ? (showPassword ? "text" : "password") : type}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
      {isPasswordInput && (
        <span className="toggle-password" onClick={handleTogglePassword}>
          {showPassword ? <BiHide /> : <BiShowAlt />}
        </span>
      )}
    </div>
  );
};

export default FormInput;

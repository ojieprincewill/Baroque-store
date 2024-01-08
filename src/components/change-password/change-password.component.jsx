import React, { useState } from "react";

import "./change-password.styles.scss";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  selectPasswordUpdateFailure,
  selectPasswordUpdateSuccess,
  updatePassword,
} from "../../features/account/accountSlice";

const ChangePassword = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const passwordUpdateSuccess = useSelector(selectPasswordUpdateSuccess);
  const passwordUpdateFailure = useSelector(selectPasswordUpdateFailure);
  const dispatch = useDispatch();

  const [passwordDetails, setPasswordDetails] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const { currentPassword, newPassword, confirmPassword } = passwordDetails;

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    dispatch(
      updatePassword({
        email: currentUser.email,
        currentPassword,
        newPassword,
      })
    );

    setPasswordDetails({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setError(null);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setPasswordDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const { currentPassword, newPassword, confirmPassword } = passwordDetails;

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
        <Link
          to="/account/settings"
          onClick={() => window.scrollTo(0, 0)}
          className="breadlink"
        >
          Account Settings <span className="arrow">{">"}</span>
        </Link>{" "}
        <span className="breadtitle">Update Password</span>
      </div>
      <p className="form-header">Change password</p>
      {passwordUpdateSuccess && (
        <p className="success-message">Password updated successfully!</p>
      )}
      {passwordUpdateFailure && (
        <p className="error">
          There was a problem updating the password. Please try again.
        </p>
      )}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleFormSubmit}>
        <FormInput
          type="password"
          name="currentPassword"
          value={currentPassword}
          onChange={handleChange}
          label="Current Password"
          required
        />

        <FormInput
          type="password"
          name="newPassword"
          value={newPassword}
          onChange={handleChange}
          label="New Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Change Password</CustomButton>
      </form>
    </>
  );
};

export default ChangePassword;

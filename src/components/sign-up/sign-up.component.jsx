import React, { useState } from "react";

import "./sign-up.styles.scss";

import { useNavigate } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";

const SignUp = () => {
  const [details, setDetails] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signingUp, setSigningUp] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRedirect = () => {
    const intendedCheckoutUrl = localStorage.getItem("intendedCheckoutUrl");
    const intendedAccountUrl = localStorage.getItem("intendedAccountUrl");

    if (intendedAccountUrl) {
      navigate(intendedAccountUrl);
      localStorage.removeItem("intendedAccountUrl");
    } else if (intendedCheckoutUrl) {
      navigate(intendedCheckoutUrl);
      localStorage.removeItem("intendedCheckoutUrl");
    } else {
      navigate("/");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = details;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setSigningUp(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, {
        displayName,
      });

      await updateProfile(user, { displayName });

      setDetails({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      await handleRedirect();
    } catch (error) {
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        setError("User already exists. Please sign in instead.");
      } else if (error.code === "auth/network-request-failed") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError("An error occurred during sign-up. Please try again.");
      }
    } finally {
      setSigningUp(false);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const { displayName, email, password, confirmPassword } = details;
  return (
    <div className="sign-up-container">
      <h2 className="title">I do not have an account</h2>
      <span className="subtitle">Sign up with your email and password</span>
      {signingUp && <LoadingSpinner />}

      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
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
        {error && <span className="error-message">{error}</span>}
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;

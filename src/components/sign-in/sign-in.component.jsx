import React, { useState } from "react";

import "./sign-in.styles.scss";

import { useNavigate } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, provider } from "../../firebase/firebase.utils";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";

const SignIn = () => {
  const navigate = useNavigate();
  const [signedIn, setSignedIn] = useState({
    email: "",
    password: "",
  });
  const [signInError, setSignInError] = useState(null);
  const [loggingIn, setLoggingIn] = useState(false);

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
    const { email, password } = signedIn;

    try {
      setLoggingIn(true);
      await signInWithEmailAndPassword(auth, email, password);
      setSignedIn({ email: "", password: "" });
      setSignInError(null);

      await handleRedirect();
    } catch (error) {
      console.log(error);
      setSignInError("Invalid email or password. Please try again.");
      setSignedIn({ ...signedIn, password: "" });
    } finally {
      setLoggingIn(false);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setSignedIn((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    try {
      await signInWithPopup(auth, provider);
      await handleRedirect();
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password } = signedIn;
  return (
    <>
      <div className="sign-in-container">
        <h2 className="title">I already have an account</h2>
        <span className="subtitle">Sign in with your email and password</span>
        {loggingIn && <LoadingSpinner />}

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={handleChange}
            value={password}
            label="Password"
            required
          />
          {signInError && <div className="error-message">{signInError}</div>}

          <div className="btn-flex">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={handleClick} isGoogleSignIn={true}>
              Google sign in
            </CustomButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;

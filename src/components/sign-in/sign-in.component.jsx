import React, { useState } from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, provider } from "../../firebase/firebase.utils";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setDetails({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleClick = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <div className="sign-in-container">
      <h2 className="title">I already have an account</h2>
      <span className="subtitle">Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={details.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={details.password}
          label="password"
          required
        />
        <div className="btn-flex">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={handleClick} isGoogleSignIn={true}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

import React, { useState } from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, provider } from "../../firebase/firebase.utils";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [signedIn, setSignedIn] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = signedIn;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSignedIn({ email: "", password: "" });
    } catch (error) {
      console.log(error);
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
      signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password } = signedIn;
  return (
    <div className="sign-in-container">
      <h2 className="title">I already have an account</h2>
      <span className="subtitle">Sign in with your email and password</span>

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

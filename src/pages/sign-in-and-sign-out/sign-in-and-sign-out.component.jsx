import React, { useState, useEffect } from "react";

import "./sign-in-and-sign-out.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import Navigation from "../../components/navigation/navigation.component";

const SignInAndSignUp = ({ currentUser }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navigation
        currentUser={currentUser}
        className={`otherpages-navigation ${isScrolled ? "scrolled" : ""}`}
      />
      <div className="sign-in">
        <SignIn />
      </div>
    </>
  );
};

export default SignInAndSignUp;

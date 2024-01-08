import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./mobile-navigation.styles.scss";

import { useSelector } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";

const MobileNavigation = ({ navOpen }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const isPhoneScreen = window.innerWidth <= 600;

  const handleAccountLink = () => {
    if (!currentUser) {
      localStorage.setItem("intendedAccountUrl", "/account");
      navigate("/signin");
    } else {
      navigate("/account");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className={`mobile-pagelink-container ${navOpen ? "animate" : ""}`}>
      <Link
        to="/"
        onClick={() => window.scrollTo(0, 0)}
        className="mobile-pagelink"
      >
        Home
      </Link>
      <Link
        to="/shop"
        onClick={() => window.scrollTo(0, 0)}
        className="mobile-pagelink"
      >
        Shop
      </Link>
      <Link
        to="/blog"
        onClick={() => window.scrollTo(0, 0)}
        className="mobile-pagelink"
      >
        Blog
      </Link>
      <Link
        to="/about"
        onClick={() => window.scrollTo(0, 0)}
        className="mobile-pagelink"
      >
        About
      </Link>
      <Link
        to="/contact"
        onClick={() => window.scrollTo(0, 0)}
        className="mobile-pagelink"
      >
        Contact
      </Link>
      {isPhoneScreen &&
        (currentUser ? (
          <span className="mobile-pagelink" onClick={handleSignOut}>
            Sign out
          </span>
        ) : (
          <Link
            to="/signin"
            onClick={() => window.scrollTo(0, 0)}
            className="mobile-pagelink"
          >
            Sign in
          </Link>
        ))}

      {isPhoneScreen && (
        <span className="mobile-pagelink" onClick={handleAccountLink}>
          my account
        </span>
      )}
    </div>
  );
};

export default MobileNavigation;

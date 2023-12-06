import React from "react";
import { Link } from "react-router-dom";

import "./mobile-navigation.styles.scss";

const MobileNavigation = ({ handleSignOut, currentUser, navOpen }) => {
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
        to="/checkout"
        onClick={() => window.scrollTo(0, 0)}
        className="mobile-pagelink"
      >
        Checkout
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
      {currentUser ? (
        <div className="mobile-pagelink" onClick={handleSignOut}>
          Sign Out
        </div>
      ) : (
        <Link
          to="/signin"
          onClick={() => window.scrollTo(0, 0)}
          className="mobile-pagelink"
        >
          Sign In
        </Link>
      )}
    </div>
  );
};

export default MobileNavigation;

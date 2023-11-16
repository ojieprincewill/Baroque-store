import React from "react";
import { Link } from "react-router-dom";

import "./mobile-navigation.styles.scss";

const MobileNavigation = ({ handleSignOut, currentUser }) => {
  return (
    <div className="mobile-pagelink-container">
      <Link to="/" className="mobile-pagelink">
        Home
      </Link>
      <Link to="/shop" className="mobile-pagelink">
        Shop
      </Link>
      <Link to="/checkout" className="mobile-pagelink">
        Features
      </Link>
      <Link to="/blog" className="mobile-pagelink">
        Blog
      </Link>
      <Link to="/about" className="mobile-pagelink">
        About
      </Link>
      <Link to="/contact" className="mobile-pagelink">
        Contact
      </Link>
      {currentUser ? (
        <div className="pagelink" onClick={handleSignOut}>
          Sign Out
        </div>
      ) : (
        <Link to="/signin" className="mobile-pagelink">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default MobileNavigation;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = ({ className, currentUser }) => {
  const handleSignOut = async () => {
    try {
      signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <>
      <div className={`${className}`}>
        <div className="logo-container">
          <Link to="/" className="logo">
            BAROQUE
          </Link>
        </div>
        <div className="pagelink-container">
          <Link to="/" className="pagelink">
            Home
          </Link>
          <Link to="/shop" className="pagelink">
            Shop
          </Link>
          <Link className="pagelink">Features</Link>
          <Link className="pagelink">Blog</Link>
          <Link to="/about" className="pagelink">
            About
          </Link>
          <Link className="pagelink">Contact</Link>
          {currentUser ? (
            <div className="pagelink" onClick={handleSignOut}>
              Sign Out
            </div>
          ) : (
            <Link className="pagelink" to="/signin">
              Sign In
            </Link>
          )}
        </div>
        <div className="icons-container">
          <div className="cartcontainer">
            <div className="carticon">
              <FontAwesomeIcon icon={faCartShopping} />
              <div className="cart-badge">0</div>
            </div>
          </div>
          <div className="sidebar-container">
            <FontAwesomeIcon icon={faBars} className="baricon" />
          </div>
        </div>
      </div>
      <div className="nav-placeholder"></div>
    </>
  );
};

export default Navigation;

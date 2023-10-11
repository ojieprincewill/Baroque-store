import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = ({ className, currentUser }) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="logo-container">
          <p className="logo">BAROQUE</p>
        </div>
        <div className="pagelink-container">
          <p className="pagelink">Home</p>
          <p className="pagelink">Shop</p>
          <p className="pagelink">Features</p>
          <p className="pagelink">Blog</p>
          <p className="pagelink">About</p>
          <p className="pagelink">Contact</p>
          {currentUser ? (
            <div className="pagelink" onClick={() => auth.signOut()}>
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

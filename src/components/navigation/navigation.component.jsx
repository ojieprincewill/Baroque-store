import React from "react";

import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./navigation.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartModal from "../cart-modal/cart-modal.component";
import WishIcon from "../wishlist-icon/wish-icon.component";
import WishModal from "../wish-modal/wish-modal.component";

const Navigation = ({ className }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isCartModalOpen = useSelector((state) => state.cart.hidden);
  const isWishModalOpen = useSelector((state) => state.wishList.hidden);
  const location = useLocation();

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
          <Link
            to="/"
            className={`pagelink ${location.pathname === "/" && "active"}`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`pagelink ${location.pathname === "/shop" && "active"}`}
          >
            Shop
          </Link>
          <Link
            to="/checkout"
            className={`pagelink ${
              location.pathname === "/checkout" && "active"
            }`}
          >
            Features
          </Link>
          <Link
            to="/blog"
            className={`pagelink ${location.pathname === "/blog" && "active"}`}
          >
            Blog
          </Link>
          <Link
            to="/about"
            className={`pagelink ${location.pathname === "/about" && "active"}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`pagelink ${
              location.pathname === "/contact" && "active"
            }`}
          >
            Contact
          </Link>
          {currentUser ? (
            <div className="pagelink" onClick={handleSignOut}>
              Sign Out
            </div>
          ) : (
            <Link
              to="/signin"
              className={`pagelink ${
                location.pathname === "/signin" && "active"
              }`}
            >
              Sign In
            </Link>
          )}
        </div>
        <div className="icons-container">
          <div className="cartcontainer">
            <CartIcon />
          </div>
          <div className="wishcontainer">
            <WishIcon />
          </div>
        </div>
      </div>
      <div className="nav-placeholder"></div>
      {isCartModalOpen ? null : <CartModal />}
      {isWishModalOpen ? null : <WishModal />}
    </>
  );
};

export default Navigation;

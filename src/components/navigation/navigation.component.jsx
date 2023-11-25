import React, { useState } from "react";

import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./navigation.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartModal from "../cart-modal/cart-modal.component";
import WishIcon from "../wishlist-icon/wish-icon.component";
import WishModal from "../wish-modal/wish-modal.component";
import { FiMenu, FiX } from "react-icons/fi";
import MobileNavigation from "./mobile-navigation.component";

const Navigation = ({ className }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isCartModalOpen = useSelector((state) => state.cart.hidden);
  const isWishModalOpen = useSelector((state) => state.wishList.hidden);
  const [navDisplay, setNavDisplay] = useState(false);
  const location = useLocation();

  const handleBurgerClick = () => {
    setNavDisplay(!navDisplay);
  };

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
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="logo">
            BAROQUE
          </Link>
        </div>
        <div className="pagelink-container">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className={`pagelink ${location.pathname === "/" && "active"}`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => window.scrollTo(0, 0)}
            className={`pagelink ${location.pathname === "/shop" && "active"}`}
          >
            Shop
          </Link>
          <Link
            to="/checkout"
            onClick={() => window.scrollTo(0, 0)}
            className={`pagelink ${
              location.pathname === "/checkout" && "active"
            }`}
          >
            Features
          </Link>
          <Link
            to="/blog"
            onClick={() => window.scrollTo(0, 0)}
            className={`pagelink ${
              location.pathname.includes("/blog") && "active"
            }`}
          >
            Blog
          </Link>
          <Link
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            className={`pagelink ${location.pathname === "/about" && "active"}`}
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
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
              onClick={() => window.scrollTo(0, 0)}
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
          <div className="burger-icon-cont" onClick={handleBurgerClick}>
            {navDisplay ? (
              <FiX className="burger-icon" />
            ) : (
              <FiMenu className="burger-icon" />
            )}
          </div>
        </div>
      </div>
      {navDisplay ? (
        <MobileNavigation
          navOpen={navDisplay}
          currentUser={currentUser}
          handleSignOut={handleSignOut}
        />
      ) : null}
      <div className="nav-placeholder"></div>
      {isCartModalOpen ? null : <CartModal cartModalActive={isCartModalOpen} />}
      {isWishModalOpen ? null : <WishModal />}
    </>
  );
};

export default Navigation;

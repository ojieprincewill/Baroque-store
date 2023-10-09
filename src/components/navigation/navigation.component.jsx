import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./navigation.styles.scss";
import CartIcon from "./cart-icon.component";

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navigation ${scrolling ? "scrolled" : ""}`}>
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
        </div>
        <div className="icons-container">
          <CartIcon />
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

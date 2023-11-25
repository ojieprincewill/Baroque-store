import React from "react";
import { Link } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, subTitle }) => {
  const mobileStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    width: "100%",
    height: "230px",
  };

  const mobileBreakpoint = 600;

  const isMobileScreen = window.innerWidth <= mobileBreakpoint;

  if (isMobileScreen) {
    return (
      <div
        style={{
          ...mobileStyles,
        }}
        className="menu-item"
      >
        <div className="content">
          <span className="title">{title.toUpperCase()}</span>
          <span className="subtitle">{subTitle}</span>
        </div>
        <div className="shoplink-container">
          <Link
            to="/shop"
            onClick={() => window.scrollTo(0, 0)}
            className="shop-link"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        width: "100%",
      }}
      className="menu-item"
    >
      <div className="content">
        <span className="title">{title.toUpperCase()}</span>
        <span className="subtitle">{subTitle}</span>
      </div>
      <div className="shoplink-container">
        <Link
          to="/shop"
          onClick={() => window.scrollTo(0, 0)}
          className="shop-link"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;

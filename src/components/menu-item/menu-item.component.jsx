import React from "react";
import { Link } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, subTitle }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
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

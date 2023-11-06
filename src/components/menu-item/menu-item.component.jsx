import React from "react";
import { Link } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, subTitle }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="menu-item"
    >
      <div className="content">
        <span className="title">{title.toUpperCase()}</span>
        <span className="subtitle">{subTitle}</span>
      </div>
      <div className="shoplink-container">
        <Link to="/shop" className="shop-link">
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;

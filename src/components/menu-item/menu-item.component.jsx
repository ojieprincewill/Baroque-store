import React from "react";
import { Link } from "react-router-dom";

import "./menu-item.styles.scss";
import ShopLink from "./shop-link.component";

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
      <Link to="/shop">
        <ShopLink />
      </Link>
    </div>
  );
};

export default MenuItem;

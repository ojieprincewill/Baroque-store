import React from "react";

import "./menu-item.styles.scss";
import Shoplink from "../shop-link/shop-link.component";

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
      <Shoplink />
    </div>
  );
};

export default MenuItem;

import React from "react";

import "./shop-link.styles.scss";
import { Link } from "react-router-dom";

const ShopLink = () => {
  return (
    <div className="shoplink-container">
      <Link to="/shop" className="shop-link">
        SHOP NOW
      </Link>
    </div>
  );
};

export default ShopLink;

import React from "react";

import "./header.styles.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <p className="small">New Season</p>
      <p className="large">ALL NEW COLLECTIONS</p>
      <Link to="/shop" onClick={() => window.scrollTo(0, 0)}>
        <div className="btn">
          <button className="shop-btn">SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default Header;

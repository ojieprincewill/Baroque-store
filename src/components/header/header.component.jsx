import React from "react";

import "./header.styles.scss"

const Header = () => {
    return (
        <div className="text-container">
            <p className="small">New Season</p>
            <p className="large">ALL NEW COLLECTIONS</p>
            <div className="btn">
              <button className="shop-btn">SHOP NOW</button>
            </div>
        </div>
    )
};

export default Header;
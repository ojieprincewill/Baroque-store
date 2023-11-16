import React from "react";

import "./categories.styles.scss";

const Categories = () => {
  return (
    <div>
      <h3 className="footer-title">CATEGORIES</h3>
      <div className="footertext-container">
        <p className="footertext">Women</p>
        <p className="footertext">Men</p>
        <p className="footertext">Shoes</p>
        <p className="footertext">Watches</p>
        <p className="footertext">Bags</p>
      </div>
    </div>
  );
};

export default Categories;

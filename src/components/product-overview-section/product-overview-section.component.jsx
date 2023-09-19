import React from "react";

import "./product-overview-section.styles.scss";
import TagFilterSearchGrid from "./filterandsearch.component";

const ProductOverviewSection = () => {
  return (
    <div className="section-container">
      <h1 className="section-header">PRODUCT OVERVIEW</h1>
      <TagFilterSearchGrid />
    </div>
  );
};

export default ProductOverviewSection;

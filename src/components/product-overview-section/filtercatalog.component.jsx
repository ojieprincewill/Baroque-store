import React from "react";

import "./filtercatalog.styles.scss";
import {
  ColorContent,
  PriceContent,
  SortByContent,
  TagContent,
} from "./catalog-content.component";

const FilterCatalog = () => {
  return (
    <div className="catalog-container">
      <div className="catalog">
        <SortByContent />
        <PriceContent />
        <ColorContent />
        <TagContent />
      </div>
    </div>
  );
};

export default FilterCatalog;

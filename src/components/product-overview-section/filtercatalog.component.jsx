import React from "react";

import "./filtercatalog.styles.scss";
import {
  SortBy,
  PriceRange,
  ColorFilters,
  TagFilters,
} from "./catalog-content.component";

const FilterCatalog = ({ handleFilterChange }) => {
  return (
    <div className="catalog-container">
      <div className="catalog">
        <SortBy handleFilterChange={handleFilterChange} />
        <PriceRange handleFilterChange={handleFilterChange} />
        <ColorFilters handleFilterChange={handleFilterChange} />
        <TagFilters handleFilterChange={handleFilterChange} />
      </div>
    </div>
  );
};

export default FilterCatalog;

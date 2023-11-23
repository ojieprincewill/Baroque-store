import React from "react";
import "./filterandsearch.styles.scss";

import FilterButton from "./filter-button.component";
import SearchButton from "./search-button.component";

const FilterAndSearch = ({ toggleActiveButton, activeButton }) => {
  return (
    <>
      <div className="fs-button-container">
        <FilterButton
          toggleActiveButton={() => toggleActiveButton("filter")}
          isActive={activeButton === "filter"}
        />
        <SearchButton
          toggleActiveButton={() => toggleActiveButton("search")}
          isActive={activeButton === "search"}
        />
      </div>
    </>
  );
};

export default FilterAndSearch;

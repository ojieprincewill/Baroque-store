import React from "react";
import "./filterandsearch.styles.scss";

import FilterButton from "./filter-button.component";
import SearchButton from "./search-button.component";

const FilterAndSearch = ({ activeButton, setActiveButton }) => {
  const handleButtonClick = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(null);
      setActiveButton(buttonName);
    }
  };
  return (
    <>
      <div className="fs-button-container">
        <FilterButton
          onClick={() => handleButtonClick("filter")}
          isActive={activeButton === "filter"}
        />
        <SearchButton
          onClick={() => handleButtonClick("search")}
          isActive={activeButton === "search"}
        />
      </div>
    </>
  );
};

export default FilterAndSearch;

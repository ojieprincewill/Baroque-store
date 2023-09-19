import React, { useState } from "react";
import "./filterandsearch.styles.scss";

import FilterButton from "./filter-button.component";
import FilterCatalog from "./filtercatalog.component";
import SearchButton from "./search-button.component";
import SearchField from "./searchfield.component";
import TagList from "./taglist.component";

const TagFilterSearchGrid = () => {
  const [showFilterCatalog, setShowFilterCatalog] = useState(false);
  const [showSearchField, setShowSearchField] = useState(false);

  const toggleFilterCatalog = () => {
    setShowFilterCatalog(!showFilterCatalog);
    setShowSearchField(false);
  };

  const toggleSearchField = () => {
    setShowSearchField(!showSearchField);
    setShowFilterCatalog(false);
  };
  return (
    <>
      <div className="grid-container">
        <TagList />
        <div className="button-container">
          <FilterButton onClick={toggleFilterCatalog} />
          <SearchButton onClick={toggleSearchField} />
        </div>
      </div>
      {showFilterCatalog && <FilterCatalog />}
      {showSearchField && <SearchField />}
    </>
  );
};

export default TagFilterSearchGrid;

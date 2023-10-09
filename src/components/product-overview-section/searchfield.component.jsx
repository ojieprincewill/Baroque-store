import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./searchfield.styles.scss";

const SearchField = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="searchfield-container">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchfield-icon" />
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="searchfield"
      />
    </div>
  );
};

export default SearchField;

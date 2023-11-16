import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import "./searchfield.styles.scss";

const SearchField = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="searchfield-container">
      <span className="searchfield-icon">
        <AiOutlineSearch />
      </span>

      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="searchfield"
      />
    </div>
  );
};

export default SearchField;

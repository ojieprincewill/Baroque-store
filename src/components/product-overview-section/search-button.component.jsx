import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./search-button.styles.scss";

const SearchButton = ({ onClick, isActive }) => {
  return (
    <div>
      <button
        className={`search-btn ${isActive && "active"}`}
        onClick={onClick}
      >
        <span>
          <FontAwesomeIcon
            icon={isActive ? faTimes : faMagnifyingGlass}
            className="search-icon"
          />
        </span>
        Search
      </button>
    </div>
  );
};

export default SearchButton;

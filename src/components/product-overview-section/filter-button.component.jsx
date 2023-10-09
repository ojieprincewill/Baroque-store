import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./filter-button.styles.scss";

const FilterButton = ({ onClick, isActive }) => {
  return (
    <div>
      <button
        className={`filter-btn ${isActive && "active"}`}
        onClick={onClick}
      >
        <span>
          <FontAwesomeIcon
            icon={isActive ? faTimes : faFilter}
            className="filter-icon"
          />
        </span>
        Filter
      </button>
    </div>
  );
};

export default FilterButton;

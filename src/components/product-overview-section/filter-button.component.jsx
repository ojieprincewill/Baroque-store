import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuListFilter } from "react-icons/lu";

import "./filter-button.styles.scss";

const FilterButton = ({ toggleActiveButton, isActive }) => {
  return (
    <div>
      <button
        className={`filter-btn ${isActive && "active"}`}
        onClick={toggleActiveButton}
      >
        <span className="filtericon">
          {isActive ? <AiOutlineClose /> : <LuListFilter />}
        </span>
        <div>Filter</div>
      </button>
    </div>
  );
};

export default FilterButton;

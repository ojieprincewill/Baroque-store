import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import "./search-button.styles.scss";

const SearchButton = ({ toggleActiveButton, isActive }) => {
  return (
    <div>
      <button
        className={`search-btn ${isActive && "active"}`}
        onClick={toggleActiveButton}
      >
        <span className="searchicon">
          {isActive ? <AiOutlineClose /> : <AiOutlineSearch />}
        </span>
        <div>Search</div>
      </button>
    </div>
  );
};

export default SearchButton;

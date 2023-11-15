import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

import "./search-button.styles.scss";

const SearchButton = ({ onClick, isActive }) => {
  return (
    <div>
      <button
        className={`search-btn ${isActive && "active"}`}
        onClick={onClick}
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

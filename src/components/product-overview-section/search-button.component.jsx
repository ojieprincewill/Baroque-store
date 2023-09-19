import React from "react";

import "./search-button.styles.scss";

const SearchButton = ({ onClick }) => {
  return (
    <div>
      <button className="search-btn" onClick={onClick}>
        Search
      </button>
    </div>
  );
};

export default SearchButton;

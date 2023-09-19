import React from "react";

import "./searchfield.styles.scss";

const SearchField = () => {
  return (
    <div className="searchfield-container">
      <input type="text" placeholder="Search" className="searchfield" />
    </div>
  );
};

export default SearchField;

import React from "react";

import "./catalog-content.styles.scss";

export const SortByContent = () => {
  const options = [
    "Default",
    "Popularity",
    "Average rating",
    "Newness",
    "Price: Low to High",
    "Price: High to Low",
  ];

  return (
    <div className="content">
      <p className="title">Sort by</p>
      <div className="option-container">
        {options.map((option, index) => (
          <p key={index} className="option">
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export const PriceContent = () => {
  const options = [
    "All",
    "$0.00 - $50.00",
    "$50.00 - $100.00",
    "$100.00 - $150.00",
    "$150.00 - $200.00",
    "$200.00+",
  ];

  return (
    <div className="content">
      <p className="title">Prices</p>
      <div className="option-container">
        {options.map((option, index) => (
          <p key={index} className="option">
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export const ColorContent = () => {
  const options = ["Black", "Blue", "Gray", "Green", "Red", "White"];

  return (
    <div className="content">
      <p className="title">Color</p>
      <div className="option-container">
        {options.map((option, index) => (
          <p key={index} className="option">
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export const TagContent = () => {
  const options = ["Fashion", "Lifestyle", "Denim", "Streetstyle", "Crafts"];

  return (
    <div className="content">
      <p className="title">Tags</p>
      <div className="button-container">
        {options.map((option, index) => (
          <p key={index} className="tag-btn">
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

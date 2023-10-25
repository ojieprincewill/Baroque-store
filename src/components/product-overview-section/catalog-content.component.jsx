import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import "./catalog-content.styles.scss";

export const SortBy = ({ handleFilterChange }) => {
  const sortOptions = [
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
        {sortOptions.map((option) => (
          <div
            key={option}
            className="option"
            onClick={() => handleFilterChange("sortBy", option)}
          >
            <span className="colortext">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PriceRange = ({ handleFilterChange }) => {
  const priceOptions = [
    "All",
    "$0.00 - $50.00",
    "$50.00 - $100.00",
    "$100.00 - $150.00",
    "$150.00 - $200.00",
    "$200.00+",
  ];

  return (
    <div className="content">
      <p className="title">Price range</p>
      <div className="option-container">
        {priceOptions.map((option) => (
          <div
            key={option}
            className="option"
            onClick={() => handleFilterChange("priceRange", option)}
          >
            <span className="colortext">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ColorFilters = () => {
  const colorOptions = ["Black", "Blue", "Gray", "Green", "Red", "White"];

  return (
    <div className="content">
      <p className="title">Color</p>
      <div className="option-container">
        {colorOptions.map((option) => (
          <div key={option} className={`option color-${option.toLowerCase()}`}>
            <span className="color-icon">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: option.toLowerCase() }}
              />
            </span>
            <span className="colortext">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TagFilters = () => {
  const tagOptions = [
    "All",
    "Fashion",
    "Lifestyle",
    "Denim",
    "Streetstyle",
    "Crafts",
  ];

  return (
    <div className="content">
      <p className="title">Tags</p>
      <div className="button-container">
        {tagOptions.map((option) => (
          <p key={option} className="tag-btn">
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

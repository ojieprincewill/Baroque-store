import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import "./catalog-content.styles.scss";

const FilterOption = ({ option, onSelect }) => {
  return (
    <div className="option" onClick={() => onSelect(option)}>
      <span className="colortext">{option}</span>
    </div>
  );
};

export const SortByContent = ({ onSortChange }) => {
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
          <FilterOption key={index} option={option} onSelect={onSortChange} />
        ))}
      </div>
    </div>
  );
};

export const PriceContent = ({ onPriceChange }) => {
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
          <FilterOption key={index} option={option} onSelect={onPriceChange} />
        ))}
      </div>
    </div>
  );
};

export const ColorContent = ({ onColorChange }) => {
  const colorOptions = ["Black", "Blue", "Gray", "Green", "Red", "White"];

  return (
    <div className="content">
      <p className="title">Color</p>
      <div className="option-container">
        {colorOptions.map((color, index) => (
          <div
            key={index}
            className={`option color-${color.toLowerCase()}`}
            onClick={() => onColorChange(color)}
          >
            <span className="color-icon">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: color.toLowerCase() }}
              />
            </span>
            <span className="colortext">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TagContent = ({ onTagChange }) => {
  const options = ["Fashion", "Lifestyle", "Denim", "Streetstyle", "Crafts"];

  return (
    <div className="content">
      <p className="title">Tags</p>
      <div className="button-container">
        {options.map((option, index) => (
          <p
            key={index}
            className="tag-btn"
            onClick={() => onTagChange(option)}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

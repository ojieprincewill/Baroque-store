import React from "react";

import "./taglist.styles.scss";

const categories = [
  "all Products",
  "men's clothing",
  "women's clothing",
  "jewelery",
];

const TagList = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="tags-container">
      {categories.map((category) => (
        <p
          key={category}
          className={`section-tag ${
            selectedCategory.toLowerCase() === category.toLowerCase()
              ? "active"
              : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </p>
      ))}
    </div>
  );
};

export default TagList;

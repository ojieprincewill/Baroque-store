import React from "react";

import "./taglist.styles.scss";

const TagList = ({ activeCategory, setActiveCategory }) => {
  const handleTagClick = (tag) => {
    setActiveCategory(tag);
  };

  const tags = [
    "all Products",
    "men's clothing",
    "women's clothing",
    "jewelery",
  ];

  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <p
          key={index}
          className={`section-tag ${
            activeCategory.toLowerCase() === tag.toLowerCase() ? "active" : ""
          }`}
          onClick={() => handleTagClick(tag)}
        >
          {tag.charAt(0).toUpperCase() + tag.slice(1)}
        </p>
      ))}
    </div>
  );
};

export default TagList;

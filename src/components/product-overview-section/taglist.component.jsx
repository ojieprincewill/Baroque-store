import React, { useState } from "react";

import "./taglist.styles.scss";

const TagList = () => {
  const [activeTag, setActiveTag] = useState(null);

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  const tags = ["All Products", "Men", "Women", "Bags", "Shoes", "Watches"];

  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <p
          key={index}
          className={`section-tag ${activeTag === index ? "active" : ""}`}
          onClick={() => handleTagClick(index)}
        >
          {tag}
        </p>
      ))}
    </div>
  );
};

export default TagList;

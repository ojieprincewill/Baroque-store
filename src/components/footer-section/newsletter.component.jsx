import React from "react";

import "./newsletter.styles.scss";

const NewsLetter = () => {
  return (
    <div>
      <h3 className="news-title">NEWSLETTER</h3>
      <div className="details-container">
        <input
          type="text"
          placeholder="email@example.com"
          className="email-input"
        />
        <div className="btn-container">
          <button className="sub-btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

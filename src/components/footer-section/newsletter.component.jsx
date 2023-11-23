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

        <div className="news-btn-container">
          <button className="news-sub-btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

import React from "react";

import "./about.styles.scss";

const About = () => {
  return (
    <div className="image-overall">
      <div class="image-frame"></div>
      <div className="image-container">
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/about-01.jpg"
          alt="Test pic"
          className="test-image"
        />
      </div>
    </div>
  );
};

export default About;

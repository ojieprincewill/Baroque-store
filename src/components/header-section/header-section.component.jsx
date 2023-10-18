import React, { useState, useEffect } from "react";
import Navigation from "../navigation/navigation.component";
import Header from "../header/header.component";

import "./header-section.styles.scss";

const HeaderSection = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="container">
      <Navigation
        className={`homepage-navigation ${scrolling ? "scrolled" : ""}`}
      />
      <Header />
    </div>
  );
};

export default HeaderSection;

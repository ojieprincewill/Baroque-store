import React, { useEffect, useState } from "react";

import Navigation from "../../components/navigation/navigation.component";
import Blog from "../../components/blog/blog.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const BlogPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navigation
        className={`otherpages-navigation ${isScrolled ? "scrolled" : ""}`}
      />
      <Blog />
      <FooterSection />
    </>
  );
};

export default BlogPage;

import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation/navigation.component";
import BlogDetails from "../../components/blog/blog-details.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const BlogDetailsPage = () => {
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
      <BlogDetails />
      <FooterSection />
    </>
  );
};

export default BlogDetailsPage;

import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation/navigation.component";
import About from "../../components/about/about.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const AboutPage = ({ currentUser }) => {
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
        currentUser={currentUser}
        className={`otherpages-navigation ${isScrolled ? "scrolled" : ""}`}
      />
      <About />
      <FooterSection />
    </>
  );
};

export default AboutPage;

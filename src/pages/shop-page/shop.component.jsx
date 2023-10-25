import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation/navigation.component";
import FooterSection from "../../components/footer-section/footer-section.component";
import ProductOverview from "../../components/product-overview-section/product-overview.component";

const Shop = ({ currentUser }) => {
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
      <ProductOverview className="othersection-container" />
      <FooterSection />
    </>
  );
};

export default Shop;

import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation/navigation.component";
import ProductOverviewSection from "../../components/product-overview-section/product-overview-section.component";
import FooterSection from "../../components/footer-section/footer-section.component";

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
        currentUser={currentUser}
        className={`otherpages-navigation ${isScrolled ? "scrolled" : ""}`}
      />
      <ProductOverviewSection className="othersection-container" />
      <FooterSection />
    </>
  );
};

export default Shop;

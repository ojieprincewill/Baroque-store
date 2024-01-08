import React, { useState, useEffect } from "react";
import Navigation from "../../components/navigation/navigation.component";
import UpdateShipping from "../../components/shipping/update-shipping-form.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const AddressPage = () => {
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
      <UpdateShipping />
      <FooterSection />
    </>
  );
};

export default AddressPage;

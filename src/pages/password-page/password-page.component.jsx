import React, { useState, useEffect } from "react";
import "./password-page.styles.scss";

import Navigation from "../../components/navigation/navigation.component";
import ChangePassword from "../../components/change-password/change-password.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const PasswordPage = () => {
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
      <div className="password-wrapper">
        <ChangePassword />
      </div>
      <FooterSection />
    </>
  );
};

export default PasswordPage;

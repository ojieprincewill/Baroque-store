import React, { useEffect, useState } from "react";

import Navigation from "../../components/navigation/navigation.component";
import AccountMaster from "../../components/account-master/account-master.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const AccountPage = () => {
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
      <AccountMaster />
      <FooterSection />
    </>
  );
};

export default AccountPage;

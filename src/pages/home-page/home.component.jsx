import React from "react";
import HeaderSection from "../../components/header-section/header-section.component";
import DirectorySection from "../../components/directory-section/directory-section.component";
import ProductOverviewSection from "../../components/product-overview-section/product-overview-section.component";
import FooterSection from "../../components/footer-section/footer-section.component";

const Home = () => {
  return (
    <div>
      <HeaderSection />
      <DirectorySection />
      <ProductOverviewSection className="homesection-container" />
      <FooterSection />
    </div>
  );
};

export default Home;

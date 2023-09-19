import React from "react";
import "./homepage.styles.scss";
import HeaderSection from "../../components/header-section/header-section.component";
import DirectorySection from "../../components/directory-section/directory-section.component";
import ProductOverviewSection from "../../components/product-overview-section/product-overview-section.component";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderSection />
      <DirectorySection />
      <ProductOverviewSection />
    </div>
  );
};

export default HomePage;

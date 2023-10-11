import React, { useState, useEffect } from "react";

import "./product-overview-section.styles.scss";
import FilterAndSearch from "./filterandsearch.component";
import TagList from "./taglist.component";
import FilterCatalog from "./filtercatalog.component";
import SearchField from "./searchfield.component";
import ProductList from "./product-list.component";

const ProductOverviewSection = ({ className }) => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [activeButton, setActiveButton] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    sortBy: "Default",
    prices: "All",
    color: null,
    tags: null,
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const products = data.filter(
          (product) =>
            product.category !== "electronics" &&
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [searchQuery]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const updateProducts = (filteredProducts) => {
    setProducts(filteredProducts);
  };

  const updateFilterOptions = (newFilterOptions) => {
    setFilterOptions(newFilterOptions);
  };

  return (
    <div className={className}>
      <h1 className="section-header">PRODUCT OVERVIEW</h1>
      <div className="grid-container">
        <TagList
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <FilterAndSearch
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
      {activeButton === "filter" && (
        <FilterCatalog
          products={products}
          updateProducts={updateProducts}
          filterOptions={filterOptions}
          updateFilterOptions={updateFilterOptions}
        />
      )}
      {activeButton === "search" && (
        <SearchField
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
      )}

      <ProductList products={products} activeCategory={activeCategory} />
    </div>
  );
};

export default ProductOverviewSection;

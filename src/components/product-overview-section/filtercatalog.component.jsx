import React from "react";

import "./filtercatalog.styles.scss";
import {
  ColorContent,
  PriceContent,
  SortByContent,
  TagContent,
} from "./catalog-content.component";

const FilterCatalog = ({
  products,
  updateProducts,
  filterOptions,
  updateFilterOptions,
}) => {
  const handleSortChange = (selectedSortOption) => {
    let sortedProducts = [];
    if (selectedSortOption === "Price: Low to High") {
      sortedProducts = products.sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === "Price: High to Low") {
      sortedProducts = products.sort((a, b) => b.price - a.price);
    } else if (selectedSortOption === "popularity") {
      sortedProducts = products.sort((a, b) => b.popularity - a.popularity);
    } else if (selectedSortOption === "averageRating") {
      sortedProducts = products.sort(
        (a, b) => b.averageRating - a.averageRating
      );
    } else {
      sortedProducts = products.sort(
        (a, b) => new Date(b.newness) - new Date(a.newness)
      );
      sortedProducts = products;
    }

    updateProducts(sortedProducts);
    updateFilterOptions({ ...filterOptions, sortBy: selectedSortOption });
  };

  const handlePriceChange = (selectedPriceOption) => {
    let filteredProducts = [];

    if (selectedPriceOption === "$0.00 - $50.00") {
      filteredProducts = products.filter(
        (product) => product.price >= 0 && product.price <= 50
      );
    } else if (selectedPriceOption === "$50.00 - $100.00") {
      filteredProducts = products.filter(
        (product) => product.price >= 50 && product.price <= 100
      );
    } else if (selectedPriceOption === "$100.00 - $150.00") {
      filteredProducts = products.filter(
        (product) => product.price >= 100 && product.price <= 150
      );
    } else if (selectedPriceOption === "$150.00 - $200.00") {
      filteredProducts = products.filter(
        (product) => product.price >= 150 && product.price <= 200
      );
    } else if (selectedPriceOption === "$200.00+") {
      filteredProducts = products.filter((product) => product.price > 200);
    } else {
      filteredProducts = products;
    }

    updateProducts(filteredProducts);
    updateFilterOptions({ ...filterOptions, price: selectedPriceOption });
  };

  const handleColorChange = (selectedColorOption) => {
    const filteredProducts = products.filter(
      (product) => product.color === selectedColorOption
    );

    updateProducts(filteredProducts);
    updateFilterOptions({ ...filterOptions, color: selectedColorOption });
  };

  const handleTagChange = (selectedTagOption) => {
    const filteredProducts = products.filter((product) =>
      product.tags.includes(selectedTagOption)
    );

    updateProducts(filteredProducts);
    updateFilterOptions({ ...filterOptions, tag: selectedTagOption });
  };

  return (
    <div className="catalog-container">
      <div className="catalog">
        <SortByContent onSortChange={handleSortChange} />
        <PriceContent onPriceChange={handlePriceChange} />
        <ColorContent onColorChange={handleColorChange} />
        <TagContent onTagChange={handleTagChange} />
      </div>
    </div>
  );
};

export default FilterCatalog;

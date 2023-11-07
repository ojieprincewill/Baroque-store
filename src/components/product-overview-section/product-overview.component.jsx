import React, { useState, useEffect } from "react";

import "./product-overview.styles.scss";
import FilterAndSearch from "./filterandsearch.component";
import TagList from "./taglist.component";
import FilterCatalog from "./filtercatalog.component";
import SearchField from "./searchfield.component";
import ProductList from "./product-list.component";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productsSlice";
import Spinner from "../with-spinner/spinner.component";

const ProductOverview = ({ className }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState("all Products");
  const [activeButton, setActiveButton] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    sortBy: "Default",
    priceRange: "All",
    color: "",
    tags: "All",
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const parsePriceRange = (priceRange) => {
    const [min, max] = priceRange.split(" - ");
    const minPrice = parseFloat(min.replace("$", "").trim());
    let maxPrice;

    if (max && max.includes("+")) {
      maxPrice = Infinity;
    } else {
      maxPrice = max ? parseFloat(max.replace("$", "").trim()) : undefined;
    }

    return { minPrice, maxPrice };
  };

  useEffect(() => {
    dispatch(fetchProducts())
      .unwrap()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    let filteredProducts = products;

    if (selectedCategory && selectedCategory.toLowerCase() !== "all products") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filters.priceRange !== "All") {
      const { minPrice, maxPrice } = parsePriceRange(filters.priceRange);
      filteredProducts = filteredProducts.filter((product) => {
        if (maxPrice === undefined) {
          return product.price >= minPrice;
        }
        return product.price >= minPrice && product.price <= maxPrice;
      });
    }

    let sortedProducts = [...filteredProducts];

    switch (filters.sortBy) {
      case "Default":
        sortedProducts.sort((a, b) => a.id - b.id);
        break;
      case "Popularity":
        sortedProducts.sort((a, b) => a.popularity - b.popularity);
        break;
      case "Average rating":
        sortedProducts.sort((a, b) => a.averageRating - b.averageRating);
        break;
      case "Newness":
        sortedProducts.sort((a, b) => a.dateAdded - b.dateAdded);
        break;
      case "Price: Low to High":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts);
  }, [products, selectedCategory, searchQuery, filters]);

  const handleSetSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterType, value) => {
    console.log("Filter changed:", filterType, value);
    const validSortOptions = new Set([
      "Default",
      "Price: Low to High",
      "Price: High to Low",
    ]);

    if (filterType === "color") {
      setErrorMessage(
        `${value} color filter is not available for these products.`
      );
      return;
    }

    if (filterType === "tags") {
      setErrorMessage("Tags filter is not available for these products.");
      return;
    }

    if (filterType === "sortBy" && !validSortOptions.has(value)) {
      setErrorMessage(
        `Sorting by ${value} is not available for these products.`
      );
      return;
    }
    setFilters({ ...filters, [filterType]: value });
    setErrorMessage(null);
  };

  return (
    <div className={className}>
      <h1 className="section-header">PRODUCT OVERVIEW</h1>
      <div className="grid-container">
        <TagList
          selectedCategory={selectedCategory}
          setSelectedCategory={handleSetSelectedCategory}
        />
        <FilterAndSearch
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
      {activeButton === "filter" && (
        <FilterCatalog handleFilterChange={handleFilterChange} />
      )}
      {activeButton === "search" && (
        <SearchField
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
      )}

      {loading && <Spinner />}

      {!loading && errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}

      {!loading && filteredProducts.length === 0 && (
        <p className="error-message">No products available</p>
      )}

      {!loading && !errorMessage && filteredProducts.length > 0 && (
        <ProductList loading={loading} products={filteredProducts} />
      )}
    </div>
  );
};

export default ProductOverview;

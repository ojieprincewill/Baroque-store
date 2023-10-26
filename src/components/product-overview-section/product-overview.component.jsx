import React, { useState, useEffect } from "react";

import "./product-overview.styles.scss";
import FilterAndSearch from "./filterandsearch.component";
import TagList from "./taglist.component";
import FilterCatalog from "./filtercatalog.component";
import SearchField from "./searchfield.component";
import ProductList from "./product-list.component";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../features/products/productsSlice";

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
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (isMounted) {
          const filteredProducts = data.filter(
            (product) => product.category !== "electronics"
          );
          dispatch(setProducts(filteredProducts));
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
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
    if (filterType === "color" || filterType === "tags") {
      console.log(`${filterType} filter is not available for these products.`);
      return;
    }
    setFilters({ ...filters, [filterType]: value });
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

      {!loading && filteredProducts.length === 0 && (
        <p>No products available.</p>
      )}

      <ProductList loading={loading} products={filteredProducts} />
    </div>
  );
};

export default ProductOverview;

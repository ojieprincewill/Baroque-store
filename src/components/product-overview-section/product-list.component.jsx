import React from "react";

import "./product-list.styles.scss";
import Pagination from "./pagination.component";
import Product from "./product.component";

const ProductList = ({ products, activeCategory }) => {
  const mainProducts = products.filter((product) => {
    return (
      product.category.toLowerCase() === activeCategory.toLowerCase() ||
      activeCategory.toLowerCase() === "all products"
    );
  });

  return (
    <>
      <div className="product-list">
        {mainProducts.map((product) => (
          <Product product={product} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default ProductList;

import React from "react";

import "./product-list.styles.scss";
import Product from "./product.component";

const ProductList = ({ products, loading }) => {
  return (
    <>
      <div className="product-list">
        {loading ? (
          <div>Loading Products...</div>
        ) : (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  );
};

export default ProductList;

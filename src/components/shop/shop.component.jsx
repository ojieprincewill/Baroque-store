import React, { useState, useEffect } from "react";

import "./shop.styles.scss";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="productoverview-container">
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div className="text-card">
            <p className="title">{product.title}</p>
            <p className="price">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;

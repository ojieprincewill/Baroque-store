import React, { useState } from "react";

import "./product.styles.scss";
import Quickview from "./quickview/quickview.component";
import WishAdd from "../wish-add-icon/wish-add-icon.component";

const Product = ({ product }) => {
  const { image, title, price } = product;
  const [isQuickOpen, setIsQuickOpen] = useState(false);

  const openQuickView = () => {
    setIsQuickOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickOpen(false);
  };

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={image} alt={title} className="product-image" />
        <button onClick={openQuickView} className="quick-view-button">
          Quick View
        </button>
      </div>
      <div className="card">
        <div className="text-cont">
          <p className="title">{title}</p>
          <p className="price">${price}</p>
        </div>
        <div>
          <WishAdd product={product} />
        </div>
      </div>
      {isQuickOpen && (
        <Quickview
          product={product}
          onClose={closeQuickView}
          isQuickOpen={isQuickOpen}
        />
      )}
    </div>
  );
};

export default Product;

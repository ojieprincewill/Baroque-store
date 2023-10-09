import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

import "./product.styles.scss";
import Quickview from "./quickview/quickview.component";
import WishlistModal from "./wishlist-modal/wishlist-modal.component";

const Product = ({ product }) => {
  const [isQuickOpen, setIsQuickOpen] = useState(false);
  const [isWishOpen, setIsWishOpen] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const handleWishlistIconClick = () => {
    setIsItemAdded(!isItemAdded);
    setIsWishOpen(true);
  };

  const closeModal = () => {
    setIsWishOpen(false);
  };

  const openQuickView = () => {
    setIsQuickOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickOpen(false);
  };

  return (
    <div key={product.id} className="product-container">
      <div className="image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <button onClick={openQuickView} className="quick-view-button">
          Quick View
        </button>
      </div>
      <div className="card">
        <div className="text-cont">
          <p className="title">{product.title}</p>
          <p className="price">${product.price}</p>
        </div>
        <div
          className={`wishlist-icon ${isItemAdded ? "active" : ""}`}
          onClick={handleWishlistIconClick}
        >
          <FontAwesomeIcon icon={fasHeart} />
        </div>
        <WishlistModal
          product={product}
          isOpen={isWishOpen}
          onClose={closeModal}
          isAdded={isItemAdded}
        />
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

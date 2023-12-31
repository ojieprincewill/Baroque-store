import React from "react";
import { Link } from "react-router-dom";

import "./blog-side.styles.scss";

import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

const BlogSide = () => {
  const products = useSelector((state) => state.products);
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search" />
        <AiOutlineSearch className="search-icon" />
      </div>
      <div className="categories-container">
        <p className="title">Categories</p>
        <div className="category-flex">
          <span className="category-option">Fashion</span>
          <span className="category-option">Beauty</span>
          <span className="category-option">Street Style</span>
          <span className="category-option">Life Style</span>
          <span className="category-option">DIY & Crafts</span>
        </div>
      </div>
      <div className="featured-container">
        <p className="title">Featured Products</p>
        <div className="featured-products-container">
          {featuredProducts.length === 0 ? (
            <p className="message">There are currently no featured products</p>
          ) : (
            featuredProducts.map((product) => (
              <div className="featured-flex" key={product.id}>
                <div className="img-cont">
                  <img
                    src={product.image}
                    alt="featured"
                    className="featured-image"
                  />
                </div>
                <div className="featured-text">
                  <Link to="/shop" className="name">
                    {product.title}
                  </Link>
                  <span className="price">${product.price}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="archive-container">
        <p className="title">Archive</p>
        <ul>
          <li className="archive-flex">
            <span>July 2023</span>
            <span>(9)</span>
          </li>
          <li className="archive-flex">
            <span>June 2023</span>
            <span>(39)</span>
          </li>
          <li className="archive-flex">
            <span>May 2023</span>
            <span>(29)</span>
          </li>
          <li className="archive-flex">
            <span>April 2023</span>
            <span>(35)</span>
          </li>
          <li className="archive-flex">
            <span>March 2023</span>
            <span>(32)</span>
          </li>
          <li className="archive-flex">
            <span>February 2023</span>
            <span>(22)</span>
          </li>
          <li className="archive-flex">
            <span>January 2023</span>
            <span>(12)</span>
          </li>
          <li className="archive-flex">
            <span>December 2022</span>
            <span>(10)</span>
          </li>
        </ul>
      </div>
      <div className="tag-container">
        <p className="title">Tags</p>
        <div className="tag-buttons">
          <button className="tag-btn">Fashion</button>
          <button className="tag-btn">Lifestyle</button>
          <button className="tag-btn">Denim</button>
          <button className="tag-btn">Streetstyle</button>
          <button className="tag-btn">Crafts</button>
        </div>
      </div>
    </div>
  );
};

export default BlogSide;

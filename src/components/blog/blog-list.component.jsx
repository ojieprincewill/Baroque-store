import React from "react";

import "./blog-list.styles.scss";
import { BsArrowRight } from "react-icons/bs";
import Pagination from "../../components/product-overview-section/pagination.component";

const BlogList = () => {
  return (
    <div>
      <div className="image-container">
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/blog-04.jpg"
          alt="Test pic"
          className="blog-image"
        />
        <div className="date-container">
          <span className="day">31</span>
          <span className="month">Oct 2023</span>
        </div>
      </div>
      <div className="blog-details">
        <p className="title">8 Inspiring Ways To Wear Winter Clothes</p>
        <p className="text">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
          sapien eu varius
        </p>
        <div className="auth-flex">
          <span className="author-container">
            <span className="black1">
              <span className="grey1">By</span> Admin{" "}
              <span className="grey1">| </span>
            </span>
            <span className="black2">
              Streetstyle, Fashion, Couple <span className="grey2">| </span>
            </span>
            <span className="black3">8 comments</span>
          </span>
          <span className="reading-link">
            Continue Reading <BsArrowRight className="link-arrow" />
          </span>
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/blog-05.jpg"
          alt="Test pic"
          className="blog-image"
        />
        <div className="date-container">
          <span className="day">29</span>
          <span className="month">Oct 2023</span>
        </div>
      </div>
      <div className="blog-details">
        <p className="title">
          The Great Big List of Men's Gifts for the Holidays
        </p>
        <p className="text">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
          sapien eu varius
        </p>
        <div className="auth-flex">
          <span className="author-container">
            <span className="black1">
              <span className="grey1">By</span> Admin{" "}
              <span className="grey1">| </span>
            </span>
            <span className="black2">
              Streetstyle, Fashion, Couple <span className="grey2">| </span>
            </span>
            <span className="black3">8 comments</span>
          </span>
          <span className="reading-link">
            Continue Reading <BsArrowRight className="link-arrow" />
          </span>
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/blog-06.jpg"
          alt="Test pic"
          className="blog-image"
        />
        <div className="date-container">
          <span className="day">26</span>
          <span className="month">Oct 2023</span>
        </div>
      </div>
      <div className="blog-details">
        <p className="title">5 Winter-to-Spring Fashion Trends to Try Now </p>
        <p className="text">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
          sapien eu varius
        </p>
        <div className="auth-flex">
          <span className="author-container">
            <span className="black1">
              <span className="grey1">By</span> Admin{" "}
              <span className="grey1">| </span>
            </span>
            <span className="black2">
              Streetstyle, Fashion, Couple <span className="grey2">| </span>
            </span>
            <span className="black3">8 comments</span>
          </span>
          <span className="reading-link">
            Continue Reading <BsArrowRight className="link-arrow" />
          </span>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default BlogList;

import React from "react";
import { Link } from "react-router-dom";

import "./blog-list.styles.scss";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from "react-redux";

const BlogList = () => {
  const blogList = useSelector((state) => state.blog.blogList);

  return (
    <div>
      {blogList.map((blog) => (
        <div key={blog.id}>
          <div className="image-container">
            <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            <div className="date-container">
              <span className="day">{blog.day}</span>
              <span className="month">{blog.month}</span>
            </div>
          </div>
          <div className="blog-details">
            <Link to={`/blog/${blog.id}`}>
              <p className="title">{blog.title}</p>
            </Link>
            <p className="text">{blog.content}</p>
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
              <Link to={`/blog/${blog.id}`}>
                <span className="reading-link">
                  Continue Reading <BsArrowRight className="link-arrow" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

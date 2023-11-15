import React from "react";

import "./blog.styles.scss";
import BlogList from "./blog-list.component";
import BlogSide from "./blog-side.component";

const Blog = () => {
  return (
    <>
      <div className="blog-header">
        <h2 className="header-text">Blog</h2>
      </div>
      <div className="blog-grid">
        <BlogList />
        <BlogSide />
      </div>
    </>
  );
};

export default Blog;

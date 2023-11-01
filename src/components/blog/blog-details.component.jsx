import React from "react";

import "./blog-details.styles.scss";

// const blogPostDetails = [
//   {
//     id: 1,
//     imageUrl: "https://preview.colorlib.com/theme/cozastore/images/blog-04.jpg",
//     day: "31",
//     month: "Oct 2023",
//     date: "31st October, 2023",
//     title: "8 Inspiring Ways To Wear Winter Clothes",
//   },
//   {
//     id: 2,
//     imageUrl: "https://preview.colorlib.com/theme/cozastore/images/blog-05.jpg",
//     day: "29",
//     month: "Oct 2023",
//     date: "29th October, 2023",
//     title: "The Great Big List of Men's Gifts for the Holidays",
//   },
//   {
//     id: 3,
//     imageUrl: "https://preview.colorlib.com/theme/cozastore/images/blog-06.jpg",
//     day: "26",
//     month: "Oct 2023",
//     date: "26th October, 2023",
//     title: "5 Winter-to-Spring Fashion Trends to Try Now",
//   },
// ];

const BlogDetails = () => {
  return (
    <div>
      <div className="img-cont">
        <img
          src="https://preview.colorlib.com/theme/cozastore/images/blog-04.jpg"
          alt="Test pic"
          className="detail-image"
        />
        <div className="date-container">
          <span className="day">31</span>
          <span className="month">Oct 2023</span>
        </div>
      </div>

      <div className="author-container">
        <span className="black1">
          <span className="grey1">By</span> Admin{" "}
          <span className="grey1">| </span>
          <span className="black1">
            31 October, 2023 <span className="grey1">|</span>
          </span>
        </span>
        <span className="black2">
          {" "}
          Streetstyle, Fashion, Couple <span className="grey2">| </span>
        </span>
        <span className="black3">8 comments</span>
      </div>
      <div className="blogdetails">
        <p className="blog-title">8 Inspiring Ways To Wear Winter Clothes</p>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet
          est vel orci luctus sollicitudin. Duis eleifend vestibulum justo,
          varius semper lacus condimentum dictum. Donec pulvinar a magna ut
          malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis
          viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed
          ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet
          ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla
          in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis
          aliquet. Donec ac purus id sapien condimentum feugiat.
        </p>
        <p className="description">
          Praesent vel mi bibendum, finibus leo ac, condimentum arcu.
          Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet
          enim. Integer tempus justo nec velit fringilla, eget eleifend neque
          blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget
          tortor ultricies elementum. Phasellus vel placerat orci, a venenatis
          justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id
          nibh arcu. Vivamus sagittis accumsan felis, quis vulputate
        </p>
      </div>
      <div className="blog-tag">
        <p className="tag-title">Tags</p>
        <button className="tagbtn">Fashion</button>
        <button className="tagbtn">Lifestyle</button>
      </div>
      <div className="comment-section">
        <p className="comment-title">Leave a comment</p>
        <p className="comment-text">
          Your email address will not be published. Required fields are marked *
        </p>

        <form className="input-container">
          <div className="field-container">
            <textarea placeholder="Comment..." className="form-textarea" />
          </div>
          <div className="field-container">
            <input type="text" placeholder="Name *" className="form-input" />
          </div>
          <div className="field-container">
            <input type="text" placeholder="Email *" className="form-input" />
          </div>
          <div className="field-container">
            <input type="text" placeholder="Website" className="form-input" />
          </div>
          <button className="form-button">Post comment</button>
        </form>
      </div>
    </div>
  );
};

export default BlogDetails;

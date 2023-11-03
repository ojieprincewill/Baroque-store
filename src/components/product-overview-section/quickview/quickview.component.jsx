import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGooglePlus } from "react-icons/bi";

import "./quickview.styles.scss";
import SizeAndColor from "./sizeandcolorselection.component";
import QuantityControl from "./quantity-control.component";
import CartButton from "./cart-button.component";

const Quickview = ({ product, onClose }) => {
  return (
    <div className="quickview-modal">
      <div className="close-btn-container">
        <button className="close-button" onClick={onClose}>
          <AiOutlineClose className="icon-close" />
        </button>
      </div>
      <div className="quickview-content">
        <div className="modal-grid">
          <div className="img-cont">
            <img
              src={product.image}
              alt={product.title}
              className="quickview-image"
            />
          </div>
          <div className="productinfo">
            <h2 className="modal-header">{product.title}</h2>
            <p className="modal-price">${product.price}</p>
            <p className="modal-text">{product.description}</p>
            <SizeAndColor />
            <QuantityControl />
            <CartButton product={product} />
            <div className="icon-cont">
              <div className="tooltip">
                <div className="wl-icon">
                  <FaRegHeart />
                </div>
                <span className="tooltip-text">Add to Wishlist</span>
              </div>
              <div className="tooltip">
                <BiLogoFacebook className="modal-icon" />
                <span className="tooltip-text">Facebook</span>
              </div>
              <div className="tooltip">
                <BiLogoTwitter className="modal-icon" />
                <span className="tooltip-text">Twitter</span>
              </div>
              <div className="tooltip">
                <BiLogoGooglePlus className="modal-icon" />
                <span className="tooltip-text">Google Plus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quickview;

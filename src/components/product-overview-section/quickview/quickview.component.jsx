import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faHeart as fasHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

import "./quickview.styles.scss";
import SizeAndColor from "./sizeandcolorselection.component";
import QuantityControl from "./quantity-control.component";
import CartButton from "./cart-button.component";

const Quickview = ({ product, onClose }) => {
  return (
    <div className="quickview-modal">
      <div className="close-btn-container">
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} className="icon-close" />
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
                <FontAwesomeIcon icon={fasHeart} className="wl-icon" />
                <span className="tooltip-text">Add to Wishlist</span>
              </div>
              <div className="tooltip">
                <FontAwesomeIcon icon={faFacebookF} className="modal-icon" />
                <span className="tooltip-text">Facebook</span>
              </div>
              <div className="tooltip">
                <FontAwesomeIcon icon={faTwitter} className="modal-icon" />
                <span className="tooltip-text">Twitter</span>
              </div>
              <div className="tooltip">
                <FontAwesomeIcon icon={faGooglePlusG} className="modal-icon" />
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

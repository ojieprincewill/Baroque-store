import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGooglePlus } from "react-icons/bi";

import "./quickview.styles.scss";
import SizeAndColor from "./sizeandcolorselection.component";
import CartButton from "./cart-button.component";
import WishAdd from "../../wish-add-icon/wish-add-icon.component";
import QuantityControl from "../../quantity-control/quantity-control.component";
import { useSelector } from "react-redux";

const Quickview = ({ product, onClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);

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
            <div className="quantity-cont">
              <QuantityControl cartItem={cartItem} />
            </div>
            <CartButton product={product} />
            <div className="icon-cont">
              <div className="tooltip">
                <div className="wl-icon">
                  <WishAdd product={product} />
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

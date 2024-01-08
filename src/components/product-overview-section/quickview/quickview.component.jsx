import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGooglePlus } from "react-icons/bi";

import "./quickview.styles.scss";
import SizeAndColor from "./sizeandcolorselection.component";
import CartButton from "./cart-button.component";
import WishAdd from "../../wish-add-icon/wish-add-icon.component";
import QuantityControl from "../../quantity-control/quantity-control.component";
import { useSelector, useDispatch } from "react-redux";
import QuickButtons from "../../quick-buttons/quick-buttons.component";
import { addItem } from "../../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Quickview = ({ product, onClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showAddToCartButton, setShowAddToCartButton] = useState(!cartItem);

  useEffect(() => {
    setShowAddToCartButton(!cartItem);
  }, [cartItem]);

  const handleAddToCart = () => {
    dispatch(addItem(product));
    setShowAddToCartButton(false);
  };

  const handleContinueShopping = () => {
    onClose();
    setShowAddToCartButton(true);
  };

  const handleGoToCheckout = () => {
    if (!currentUser) {
      localStorage.setItem("intendedCheckoutUrl", "/checkout");
      navigate("/signin");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <div className="quickview-modal">
      <div className="quickview-content">
        <div className="close-btn-container">
          <button className="close-button" onClick={onClose}>
            <AiOutlineClose className="icon-close" />
          </button>
        </div>
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
              {cartItem && <QuantityControl cartItem={cartItem} />}
            </div>
            {showAddToCartButton && (
              <CartButton onAddToCart={handleAddToCart} />
            )}{" "}
            {!showAddToCartButton && (
              <QuickButtons
                handleContinueShopping={handleContinueShopping}
                handleGoToCheckout={handleGoToCheckout}
              />
            )}
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

import React from "react";

import "./cart-sidebar.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleCartModal } from "../../features/cart-modal/cartModalSlice";

const CartModal = () => {
  const dispatch = useDispatch();
  const handleCartClose = () => {
    dispatch(toggleCartModal());
  };
  return (
    <div className="cart-sidebar-modal">
      <div className="cart-sidebar-content">
        <div className="header-flex">
          <p className="side-title">YOUR CART</p>
          <div className="close-side-cont">
            <FontAwesomeIcon
              icon={faTimes}
              className="close-sidebar"
              onClick={handleCartClose}
            />
          </div>
        </div>
        <div className="cart-items" />
        <div className="footer-flex">
          <button className="sidebar-button">VIEW CART</button>
          <button className="sidebar-button">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

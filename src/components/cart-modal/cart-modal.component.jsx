import React from "react";

import "./cart-modal.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartDisplay } from "../../features/cart/cartSlice";
import CartItem from "../cart-item/cart-item.component";

const CartModal = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const handleCartClose = () => {
    dispatch(toggleCartDisplay());
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
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} product={cartItem} />
          ))}
        </div>
        <div className="footer-flex">
          <button className="sidebar-button">VIEW CART</button>
          <button className="sidebar-button">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

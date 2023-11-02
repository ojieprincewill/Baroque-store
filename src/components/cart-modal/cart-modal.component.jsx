import React from "react";
import { useNavigate } from "react-router-dom";

import "./cart-modal.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { toggleCartDisplay } from "../../features/cart/cartSlice";
import CartItem from "../cart-item/cart-item.component";

const CartModal = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCartClose = () => {
    dispatch(toggleCartDisplay());
  };

  const handleCheckoutClick = () => {
    navigate("/checkout");
    dispatch(toggleCartDisplay());
  };

  return (
    <div className="cart-sidebar-modal">
      <div className="cart-sidebar-content">
        <div className="header-flex">
          <p className="side-title">YOUR CART</p>
          <div className="close-side-cont">
            <span className="close-sidebar" onClick={handleCartClose}>
              {" "}
              &#10006;
            </span>
          </div>
        </div>
        <div className="cart-items">
          {cartItems.length ? (
            <div className="cart-items">
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} products={cartItem} />
              ))}
            </div>
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
        <div className="footer-flex">
          <button className="sidebar-button">VIEW CART</button>
          <button className="sidebar-button" onClick={handleCheckoutClick}>
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;

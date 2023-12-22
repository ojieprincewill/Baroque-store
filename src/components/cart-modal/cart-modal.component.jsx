import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./cart-modal.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { toggleCartDisplay } from "../../features/cart/cartSlice";
import CartItem from "../cart-item/cart-item.component";

const CartModal = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalContentRef = useRef();
  const [redirecting, setRedirecting] = useState(false);

  const handleRedirect = () => {
    if (!currentUser) {
      setRedirecting(true);

      setTimeout(() => {
        navigate("/signin");
        dispatch(toggleCartDisplay());
      }, 3000);
    } else {
      navigate("/checkout");
      dispatch(toggleCartDisplay());
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        dispatch(toggleCartDisplay());
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleCartClose = (event) => {
    event.stopPropagation();
    dispatch(toggleCartDisplay());
  };

  return (
    <div className="cart-sidebar-modal">
      <div className="cart-sidebar-content" ref={modalContentRef}>
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
            <div>
              {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} products={cartItem} />
              ))}
            </div>
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
        <div className="footer-flex">
          {cartItems.length > 0 ? (
            <button
              className="sidebar-button"
              onClick={handleRedirect}
              disabled={redirecting}
            >
              {redirecting ? "REDIRECTING..." : "GO TO CHECKOUT"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CartModal;

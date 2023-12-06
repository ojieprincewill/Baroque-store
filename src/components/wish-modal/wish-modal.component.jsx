import React, { useEffect, useRef } from "react";

import "./wish-modal.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  resetWishList,
  toggleWishDisplay,
} from "../../features/wishlist/wishListSlice";
import WishItem from "../wish-item/wish-item.component";
import { addItem } from "../../features/cart/cartSlice";

const WishModal = () => {
  const wishItems = useSelector((state) => state.wishList.wishItems);
  const dispatch = useDispatch();
  const modalContentRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(event.target)
      ) {
        dispatch(toggleWishDisplay());
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleWishClose = (event) => {
    event.stopPropagation();
    dispatch(toggleWishDisplay());
  };

  const handleAddAllItems = () => {
    wishItems.forEach((item) => {
      dispatch(addItem(item));
    });

    dispatch(resetWishList());
  };

  return (
    <div className="cart-sidebar-modal">
      <div className="cart-sidebar-content" ref={modalContentRef}>
        <div className="header-flex">
          <p className="side-title">Wishlist</p>
          <div className="close-side-cont">
            <span className="close-sidebar" onClick={handleWishClose}>
              {" "}
              &#10006;
            </span>
          </div>
        </div>
        <div className="cart-items">
          {wishItems.length ? (
            <div className="cart-items">
              {wishItems.map((wishItem) => (
                <WishItem key={wishItem.id} products={wishItem} />
              ))}
            </div>
          ) : (
            <span className="empty-message">
              There are no items in your wishlist
            </span>
          )}
        </div>
        <div className="footer-flex">
          <button className="sidebar-button" onClick={handleAddAllItems}>
            ADD ITEMS TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishModal;

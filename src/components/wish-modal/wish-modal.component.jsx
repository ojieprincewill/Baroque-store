import React, { useState, useEffect, useRef } from "react";

import "./wish-modal.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishDisplay } from "../../features/wishlist/wishListSlice";
import WishItem from "../wish-item/wish-item.component";
import { addItem } from "../../features/cart/cartSlice";
import { removeWishItem } from "../../features/wishlist/wishListSlice";

const WishModal = () => {
  const wishItems = useSelector((state) => state.wishList.wishItems);
  const dispatch = useDispatch();
  const modalContentRef = useRef();
  const [selectedItems, setSelectedItems] = useState([]);

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

  const handleSelectItem = (itemId, isSelected) => {
    if (isSelected) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((id) => id !== itemId)
      );
    }
  };

  const handleAddSelectedItems = () => {
    const itemsToAdd = wishItems.filter((item) =>
      selectedItems.includes(item.id)
    );

    itemsToAdd.forEach((item) => {
      dispatch(addItem(item));
      dispatch(removeWishItem(item));
    });

    setSelectedItems([]);
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
                <WishItem
                  key={wishItem.id}
                  product={wishItem}
                  onSelect={handleSelectItem}
                />
              ))}
            </div>
          ) : (
            <span className="empty-message">
              There are no items in your wishlist
            </span>
          )}
        </div>
        <div className="footer-flex">
          {wishItems.length > 0 ? (
            <div>
              <button
                className="sidebar-button"
                onClick={handleAddSelectedItems}
              >
                ADD ITEMS TO CART
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WishModal;

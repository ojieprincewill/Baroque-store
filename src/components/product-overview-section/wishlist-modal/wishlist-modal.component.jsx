import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./wishlist-modal.styles.scss";

const WishlistModal = ({ product, isOpen, onClose, isAdded }) => {
  return (
    <div className={`wishlist-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <div className="icon-cont">
          {isAdded ? (
            <FontAwesomeIcon icon={faCircleCheck} className="check" />
          ) : (
            <FontAwesomeIcon icon={faCircleXmark} className="xmark" />
          )}
        </div>
        <div className="modal-header">
          <span>{product.title}</span>
        </div>
        <div className="modal-body">
          <p className="wishtext">
            {isAdded
              ? "This item has been added to your wishlist!"
              : "This item has been removed from your wishlist!"}
          </p>
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="wishbtn">
            OK!
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;

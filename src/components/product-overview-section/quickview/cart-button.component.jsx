import React from "react";

import "./cart-button.styles.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../../features/cart/cartSlice";

const CartButton = ({ product, onClose }) => {
  const dispatch = useDispatch();

  const handleAddItemClick = () => {
    dispatch(addItem(product));
    onClose();
  };

  return (
    <div className="btn-container">
      <button className="sub-btn" onClick={handleAddItemClick}>
        ADD TO CART
      </button>
    </div>
  );
};

export default CartButton;

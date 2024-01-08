import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

import "./quantity-control.styles.scss";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../features/cart/cartSlice";

const QuantityControl = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { quantity } = cartItem;

  const handleAddItemClick = () => {
    dispatch(addItem(cartItem));
  };

  const handleRemoveItemClick = () => {
    dispatch(removeItem(cartItem));
  };

  if (!cartItem) {
    return null;
  }

  return (
    <div className="quantity-control">
      <div onClick={handleRemoveItemClick} className="control-decrease">
        <AiOutlineMinus />
      </div>
      <div className="quantityfield">{quantity}</div>
      <div onClick={handleAddItemClick} className="control-increase">
        <AiOutlinePlus />
      </div>
    </div>
  );
};
export default QuantityControl;

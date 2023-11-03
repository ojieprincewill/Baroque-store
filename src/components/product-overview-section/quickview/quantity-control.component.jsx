import React, { useState } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

import "./quantity-control.styles.scss";

const QuantityControl = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="quantity-control">
      <div onClick={decreaseQuantity} className="control-decrease">
        <AiOutlineMinus />
      </div>
      <div className="quantityfield">{quantity}</div>
      <div onClick={increaseQuantity} className="control-increase">
        <AiOutlinePlus />
      </div>
    </div>
  );
};
export default QuantityControl;

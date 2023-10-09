import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faMinus} />
      </div>
      <div className="quantityfield">{quantity}</div>
      <div onClick={increaseQuantity} className="control-increase">
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};
export default QuantityControl;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cartcontainer">
      <div className="carticon">
        <FontAwesomeIcon icon={faCartShopping} />
        <div className="cart-badge">0</div>
      </div>
    </div>
  );
};

export default CartIcon;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toggleCartDisplay } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();

  const handleCartIconClick = () => {
    dispatch(toggleCartDisplay());
  };

  return (
    <div className="cart-icon" onClick={handleCartIconClick}>
      <FontAwesomeIcon icon={faCartShopping} className="shopping-icon" />
      <div className="cart-count">0</div>
    </div>
  );
};

export default CartIcon;

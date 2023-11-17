import React from "react";
import { HiShoppingCart } from "react-icons/hi";

import { toggleCartDisplay } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );

  const handleCartIconClick = () => {
    dispatch(toggleCartDisplay());
  };

  return (
    <div className="cart-icon" onClick={handleCartIconClick}>
      <HiShoppingCart className="shopping-icon" />
      <div className="item-count">{itemCount}</div>
    </div>
  );
};

export default CartIcon;
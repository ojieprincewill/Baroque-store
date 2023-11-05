import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { clearItem } from "../../features/cart/cartSlice";

import "./cart-item.styles.scss";

const CartItem = ({ products }) => {
  const { image, price, title, quantity } = products;
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(clearItem(products));
  };
  return (
    <div className="cart-item">
      <div className="cartimage-cont">
        <img src={image} alt="product" className="cartimage" />
        <div className="overlay-cont">
          <AiOutlineClose
            className="overlay-close"
            onClick={removeItemFromCart}
          />
        </div>
      </div>
      <div className="product-details">
        <span className="title">{title}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

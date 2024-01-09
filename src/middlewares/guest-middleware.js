import { mergeCarts } from "../features/cart/cartSlice";

const guestMiddleware = (store) => (next) => (action) => {
  if (action.type === "user/signInSuccess") {
    store.dispatch(mergeCarts());
  }

  return next(action);
};

export default guestMiddleware;

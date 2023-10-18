import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import userReducer from "../features/user/userSlice";
import cartModalReducer from "../features/cart-modal/cartModalSlice";

const logger = createLogger();

const store = configureStore({
  reducer: {
    user: userReducer,
    cartModal: cartModalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

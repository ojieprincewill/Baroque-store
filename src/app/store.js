import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import guestMiddleware from "../middlewares/guest-middleware";

import userReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productsSlice";
import wishListReducer from "../features/wishlist/wishListSlice";
import blogReducer from "../features/blog/blogSlice";
import ordersReducer from "../features/orders/ordersSlice";
import orderHistoryReducer from "../features/orders/orderHistorySlice";
import accountReducer from "../features/account/accountSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
  wishList: wishListReducer,
  blog: blogReducer,
  orders: ordersReducer,
  orderHistory: orderHistoryReducer,
  account: accountReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishList"],
};

let middlewares = [];

middlewares.push(guestMiddleware);

if (process.env.NODE_ENV === "development") {
  const logger = createLogger();
  middlewares = [...middlewares, logger];
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

const persistor = persistStore(store);

export { store, persistor };

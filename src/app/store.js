import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import productReducer from "../redux/productSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
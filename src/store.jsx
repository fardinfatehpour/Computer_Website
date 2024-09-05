import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "./infoSlice";

export const store = configureStore({
  reducer: {
    Shop: ShopReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux";

const store: any = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
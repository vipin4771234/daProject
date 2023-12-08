import {configureStore} from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';

const store: any = configureStore({
  reducer: {
    product: ProductSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Products {
    value: number;
  }

const initialProduct: Products[] = [];

export const productSlice = createSlice({
  name: 'Products',
  initialState: initialProduct,
  reducers: {
    setProducts: (state, action: PayloadAction<Products[]>) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } =
  productSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default productSlice.reducer;